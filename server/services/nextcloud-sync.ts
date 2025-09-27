import { createClient } from 'webdav';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { db } from '../storage';
import { nextcloudImages } from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import mime from 'mime-types';

interface NextcloudConfig {
  url: string;
  username: string;
  password: string;
  remoteDir: string;
  localDir: string;
}

export class NextcloudSyncService {
  private client;
  private config: NextcloudConfig;
  private isProcessing = false;

  constructor() {
    // Ensure proper URL format
    let baseUrl = process.env.NEXTCLOUD_URL || 'https://nextcloud.evolvra.ai';
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = 'https://' + baseUrl;
    }
    // Remove trailing slash if present
    baseUrl = baseUrl.replace(/\/$/, '');
    
    this.config = {
      url: `${baseUrl}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME || ''}`,
      username: process.env.NEXTCLOUD_USERNAME || '',
      password: process.env.NEXTCLOUD_PASSWORD || '',
      remoteDir: process.env.NEXTCLOUD_REMOTE_DIR || 'Website Images',
      localDir: process.env.NEXTCLOUD_LOCAL_DIR || './public/images'
    };

    console.log(`🔗 Nextcloud WebDAV URL: ${this.config.url}`);
    console.log(`📁 Remote directory: ${this.config.remoteDir}`);

    this.client = createClient(this.config.url, {
      username: this.config.username,
      password: this.config.password,
    });
  }

  async initialize(): Promise<void> {
    try {
      // Ensure local directory exists
      await fs.mkdir(this.config.localDir, { recursive: true });
      
      // Ensure optimized subdirectories exist
      await fs.mkdir(path.join(this.config.localDir, 'webp'), { recursive: true });
      await fs.mkdir(path.join(this.config.localDir, 'avif'), { recursive: true });
      await fs.mkdir(path.join(this.config.localDir, 'optimized'), { recursive: true });
      
      console.log('✅ Nextcloud sync service initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Nextcloud sync:', error);
      throw error;
    }
  }

  async syncImages(): Promise<{ success: number; errors: number; skipped: number }> {
    if (this.isProcessing) {
      console.log('⏭️ Sync already in progress, skipping...');
      return { success: 0, errors: 0, skipped: 1 };
    }

    this.isProcessing = true;
    const stats = { success: 0, errors: 0, skipped: 0 };

    try {
      console.log('🔄 Starting Nextcloud image sync...');
      
      // First, let's check if the remote directory exists by listing root directories
      try {
        console.log('📂 Checking available directories...');
        const rootContents = await this.client.getDirectoryContents('/');
        console.log('📁 Available directories:', rootContents.map((item: any) => item.basename).join(', '));
        
        // Look for Website Images folder (case insensitive)
        const websiteImagesFolder = rootContents.find((item: any) => 
          item.basename.toLowerCase().includes('website') && 
          item.basename.toLowerCase().includes('images')
        );
        
        if (websiteImagesFolder) {
          console.log(`✅ Found folder: ${websiteImagesFolder.basename}`);
          this.config.remoteDir = websiteImagesFolder.basename;
        } else {
          // Look for Photos folder as alternative
          const photosFolder = rootContents.find((item: any) => 
            item.basename.toLowerCase() === 'photos'
          );
          
          if (photosFolder) {
            console.log(`📸 Using Photos folder instead of Website Images`);
            this.config.remoteDir = photosFolder.basename;
          } else {
            console.log('⚠️ Neither Website Images nor Photos folder found');
            console.log('📁 Please create a "Website Images" folder in your Nextcloud root directory');
            console.log('   or add some images to the Photos folder');
            
            // Return early with a clear message
            stats.skipped = 1;
            return stats;
          }
        }
      } catch (error) {
        console.log('⚠️ Could not list root directory, continuing with default path...');
      }
      
      // Get list of files from Nextcloud
      const remoteFiles = await this.client.getDirectoryContents(this.config.remoteDir);
      
      if (!Array.isArray(remoteFiles)) {
        throw new Error('Failed to get directory contents');
      }

      // Filter only image files
      const imageFiles = remoteFiles.filter(file => 
        file.type === 'file' && 
        /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file.filename)
      );

      console.log(`📁 Found ${imageFiles.length} images in Nextcloud`);

      for (const file of imageFiles) {
        try {
          await this.syncSingleImage(file);
          stats.success++;
        } catch (error) {
          console.error(`❌ Error syncing ${file.filename}:`, error);
          stats.errors++;
        }
      }

      console.log(`✅ Sync completed: ${stats.success} success, ${stats.errors} errors`);
      
    } catch (error) {
      console.error('❌ Sync failed:', error);
      stats.errors++;
    } finally {
      this.isProcessing = false;
    }

    return stats;
  }

  private async syncSingleImage(file: any): Promise<void> {
    const filename = file.filename;
    const remotePath = `${this.config.remoteDir}/${filename}`;
    const localPath = path.join(this.config.localDir, filename);
    const lastModified = new Date(file.lastmod);

    // Check if file exists in database and is up to date
    const existingRecord = await db.query.nextcloudImages.findFirst({
      where: eq(nextcloudImages.filename, filename),
    });

    if (existingRecord && existingRecord.lastModified >= lastModified) {
      console.log(`⏭️ Skipping ${filename} (already up to date)`);
      return;
    }

    // Download file from Nextcloud
    console.log(`⬇️ Downloading ${filename}...`);
    const fileBuffer = await this.client.getFileContents(remotePath, { format: 'binary' }) as Buffer;
    
    // Save original file
    await fs.writeFile(localPath, fileBuffer);

    // Get file info
    const mimeType = mime.lookup(filename) || 'application/octet-stream';
    const fileSize = fileBuffer.length;

    // Generate optimized versions
    const optimizedVersions = await this.generateOptimizedVersions(filename, fileBuffer);

    // Save/update database record
    const imageData = {
      filename,
      originalPath: remotePath,
      localPath: `/images/${filename}`,
      mimeType,
      fileSize,
      lastModified,
      optimizedVersions,
      syncStatus: 'synced' as const,
      lastSyncAt: new Date(),
    };

    if (existingRecord) {
      await db.update(nextcloudImages)
        .set(imageData)
        .where(eq(nextcloudImages.id, existingRecord.id));
    } else {
      await db.insert(nextcloudImages).values(imageData);
    }

    console.log(`✅ Synced ${filename}`);
  }

  private async generateOptimizedVersions(filename: string, buffer: Buffer) {
    const baseName = path.parse(filename).name;
    const sizes = [400, 800, 1600];
    const optimizedVersions: any = {};

    try {
      // Generate WebP versions
      optimizedVersions.webp = {
        path: `/images/webp/${baseName}`,
        sizes: []
      };

      for (const size of sizes) {
        const webpPath = path.join(this.config.localDir, 'webp', `${baseName}-${size}w.webp`);
        const webpBuffer = await sharp(buffer)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 85 })
          .toBuffer();
        
        await fs.writeFile(webpPath, webpBuffer);
        
        const { width, height } = await sharp(webpBuffer).metadata();
        optimizedVersions.webp.sizes.push({
          width: width || size,
          height: height || Math.round((height || size) * (size / (width || size))),
          fileSize: webpBuffer.length
        });
      }

      // Generate AVIF versions (more efficient but newer format)
      optimizedVersions.avif = {
        path: `/images/avif/${baseName}`,
        sizes: []
      };

      for (const size of sizes) {
        try {
          const avifPath = path.join(this.config.localDir, 'avif', `${baseName}-${size}w.avif`);
          const avifBuffer = await sharp(buffer)
            .resize(size, null, { withoutEnlargement: true })
            .avif({ quality: 80 })
            .toBuffer();
          
          await fs.writeFile(avifPath, avifBuffer);
          
          const { width, height } = await sharp(avifBuffer).metadata();
          optimizedVersions.avif.sizes.push({
            width: width || size,
            height: height || Math.round((height || size) * (size / (width || size))),
            fileSize: avifBuffer.length
          });
        } catch (error) {
          console.log(`⚠️ AVIF generation failed for ${filename} at ${size}px, skipping`);
        }
      }

      // Generate optimized JPEG fallback
      optimizedVersions.jpeg = {
        path: `/images/optimized/${baseName}`,
        sizes: []
      };

      for (const size of sizes) {
        const jpegPath = path.join(this.config.localDir, 'optimized', `${baseName}-${size}w.jpg`);
        const jpegBuffer = await sharp(buffer)
          .resize(size, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true })
          .toBuffer();
        
        await fs.writeFile(jpegPath, jpegBuffer);
        
        const { width, height } = await sharp(jpegBuffer).metadata();
        optimizedVersions.jpeg.sizes.push({
          width: width || size,
          height: height || Math.round((height || size) * (size / (width || size))),
          fileSize: jpegBuffer.length
        });
      }

    } catch (error) {
      console.error(`❌ Error generating optimized versions for ${filename}:`, error);
    }

    return optimizedVersions;
  }

  async getImageMetadata(filename: string) {
    return await db.query.nextcloudImages.findFirst({
      where: eq(nextcloudImages.filename, filename),
    });
  }

  async getAllImages() {
    return await db.query.nextcloudImages.findMany({
      where: eq(nextcloudImages.syncStatus, 'synced'),
      orderBy: [desc(nextcloudImages.lastSyncAt)],
    });
  }

  // Generate responsive image srcset for a given image
  generateResponsiveSrcSet(imageData: any, format: 'webp' | 'avif' | 'jpeg' = 'webp'): {
    srcset: string;
    sizes: string;
    src: string;
  } {
    const optimized = imageData.optimizedVersions[format];
    if (!optimized) {
      // Fallback to original
      return {
        srcset: imageData.localPath,
        sizes: '100vw',
        src: imageData.localPath
      };
    }

    const srcsetEntries = optimized.sizes.map((size: any, index: number) => 
      `${optimized.path}-${size.width}w.${format} ${size.width}w`
    );

    return {
      srcset: srcsetEntries.join(', '),
      sizes: '(max-width: 480px) 400px, (max-width: 768px) 800px, 1600px',
      src: `${optimized.path}-800w.${format}` // Default/fallback
    };
  }
}

// Singleton instance
export const nextcloudSync = new NextcloudSyncService();