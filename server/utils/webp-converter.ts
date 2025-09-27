import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

export interface ConversionResult {
  originalPath: string;
  webpPath: string;
  originalSize: number;
  webpSize: number;
  compressionRatio: number;
}

export class WebPConverter {
  private readonly quality: number;
  private readonly outputDir: string;

  constructor(quality: number = 85, outputDir: string = 'client/src/assets/webp') {
    this.quality = quality;
    this.outputDir = outputDir;
  }

  /**
   * Convert a single image to WebP format
   */
  async convertImage(inputPath: string, outputPath?: string): Promise<ConversionResult> {
    const inputStats = await fs.stat(inputPath);
    const originalSize = inputStats.size;

    // Generate output path if not provided
    if (!outputPath) {
      const parsed = path.parse(inputPath);
      outputPath = path.join(this.outputDir, `${parsed.name}.webp`);
    }

    // Ensure output directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: this.quality })
      .toFile(outputPath);

    // Get WebP file size
    const webpStats = await fs.stat(outputPath);
    const webpSize = webpStats.size;

    const compressionRatio = ((originalSize - webpSize) / originalSize) * 100;

    return {
      originalPath: inputPath,
      webpPath: outputPath,
      originalSize,
      webpSize,
      compressionRatio
    };
  }

  /**
   * Recursively find all image files in a directory
   */
  async findImageFiles(dir: string): Promise<string[]> {
    const imageFiles: string[] = [];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    try {
      const items = await fs.readdir(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
          // Recursively search subdirectories
          const subFiles = await this.findImageFiles(fullPath);
          imageFiles.push(...subFiles);
        } else if (item.isFile()) {
          const ext = path.extname(item.name).toLowerCase();
          if (imageExtensions.includes(ext)) {
            imageFiles.push(fullPath);
          }
        }
      }
    } catch (error) {
      console.warn(`Could not read directory ${dir}:`, error);
    }

    return imageFiles;
  }

  /**
   * Convert all images in a directory to WebP
   */
  async convertDirectory(inputDir: string): Promise<ConversionResult[]> {
    console.log(`🔄 Searching for images in: ${inputDir}`);
    
    const imageFiles = await this.findImageFiles(inputDir);
    console.log(`📁 Found ${imageFiles.length} images to convert`);

    const results: ConversionResult[] = [];
    let totalOriginalSize = 0;
    let totalWebPSize = 0;

    for (const imagePath of imageFiles) {
      try {
        console.log(`🖼️ Converting: ${path.basename(imagePath)}`);
        const result = await this.convertImage(imagePath);
        results.push(result);
        
        totalOriginalSize += result.originalSize;
        totalWebPSize += result.webpSize;

        console.log(`✅ ${path.basename(imagePath)} → ${path.basename(result.webpPath)} (${result.compressionRatio.toFixed(1)}% smaller)`);
      } catch (error) {
        console.error(`❌ Failed to convert ${imagePath}:`, error);
      }
    }

    const overallCompression = ((totalOriginalSize - totalWebPSize) / totalOriginalSize) * 100;
    
    console.log(`\n🎉 Conversion Summary:`);
    console.log(`📊 Images converted: ${results.length}`);
    console.log(`📉 Total size reduction: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`⚡ Overall compression: ${overallCompression.toFixed(1)}%`);

    return results;
  }

  /**
   * Get file size in MB
   */
  static formatFileSize(bytes: number): string {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  }
}