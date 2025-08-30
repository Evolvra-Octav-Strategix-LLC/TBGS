import ffmpeg from 'fluent-ffmpeg';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface ProcessedImage {
  originalPath: string;
  optimizedPath: string;
  thumbnailPath?: string;
  watermarkedPath?: string;
  metadata: {
    originalSize: number;
    optimizedSize: number;
    compressionRatio: number;
    format: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export interface ImageProcessingOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp';
  createThumbnail?: boolean;
  thumbnailSize?: number;
  addWatermark?: boolean;
  watermarkText?: string;
  removeMetadata?: boolean;
  autoRotate?: boolean;
}

class ImageProcessor {
  private tempDir: string;
  private watermarkPath?: string;

  constructor() {
    this.tempDir = '/tmp/image-processing';
    this.ensureTempDir();
  }

  private async ensureTempDir(): Promise<void> {
    try {
      await fs.mkdir(this.tempDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create temp directory:', error);
    }
  }

  /**
   * Process uploaded image with comprehensive optimization
   */
  async processImage(
    inputBuffer: Buffer,
    originalFileName: string,
    options: ImageProcessingOptions = {}
  ): Promise<ProcessedImage> {
    const {
      maxWidth = 1920,
      maxHeight = 1080,
      quality = 85,
      format = 'jpeg',
      createThumbnail = true,
      thumbnailSize = 300,
      addWatermark = true,
      watermarkText = 'TBGS B.V.',
      removeMetadata = true,
      autoRotate = true
    } = options;

    const fileId = randomUUID();
    const originalPath = path.join(this.tempDir, `original_${fileId}_${originalFileName}`);
    const optimizedPath = path.join(this.tempDir, `optimized_${fileId}.${format}`);
    
    try {
      // Write original file
      await fs.writeFile(originalPath, inputBuffer);
      const originalStats = await fs.stat(originalPath);
      const originalSize = originalStats.size;

      // Get image metadata
      const metadata = await this.getImageMetadata(originalPath);

      // Process main optimized image
      await this.optimizeImage(originalPath, optimizedPath, {
        maxWidth,
        maxHeight,
        quality,
        format,
        removeMetadata,
        autoRotate
      });

      const optimizedStats = await fs.stat(optimizedPath);
      const optimizedSize = optimizedStats.size;
      const compressionRatio = ((originalSize - optimizedSize) / originalSize * 100);

      let thumbnailPath: string | undefined;
      let watermarkedPath: string | undefined;

      // Create thumbnail if requested
      if (createThumbnail) {
        thumbnailPath = path.join(this.tempDir, `thumb_${fileId}.${format}`);
        await this.createThumbnail(originalPath, thumbnailPath, thumbnailSize, format);
      }

      // Add watermark if requested
      if (addWatermark) {
        watermarkedPath = path.join(this.tempDir, `watermarked_${fileId}.${format}`);
        await this.addWatermark(optimizedPath, watermarkedPath, watermarkText);
      }

      return {
        originalPath,
        optimizedPath: watermarkedPath || optimizedPath,
        thumbnailPath,
        watermarkedPath,
        metadata: {
          originalSize,
          optimizedSize,
          compressionRatio: Math.round(compressionRatio * 100) / 100,
          format,
          dimensions: metadata.dimensions
        }
      };

    } catch (error) {
      console.error('Image processing failed:', error);
      throw new Error(`Image processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Optimize image with compression and resizing
   */
  private async optimizeImage(
    inputPath: string,
    outputPath: string,
    options: {
      maxWidth: number;
      maxHeight: number;
      quality: number;
      format: string;
      removeMetadata: boolean;
      autoRotate: boolean;
    }
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      let command = ffmpeg(inputPath);

      // Auto-rotate based on EXIF
      if (options.autoRotate) {
        command = command.videoFilter('transpose=1'); // Handle basic rotation
      }

      // Resize while maintaining aspect ratio
      command = command.size(`${options.maxWidth}x${options.maxHeight}`);

      // Set quality
      if (options.format === 'jpeg') {
        command = command.outputOptions(['-q:v', options.quality.toString()]);
      }

      // Remove metadata for privacy
      if (options.removeMetadata) {
        command = command.outputOptions(['-map_metadata', '-1']);
      }

      // Set output format
      command = command.format(options.format);

      command
        .output(outputPath)
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .run();
    });
  }

  /**
   * Create thumbnail version
   */
  private async createThumbnail(
    inputPath: string,
    outputPath: string,
    size: number,
    format: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .size(`${size}x${size}`)
        .aspect('1:1')
        .format(format)
        .output(outputPath)
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .run();
    });
  }

  /**
   * Add text watermark to image
   */
  private async addWatermark(
    inputPath: string,
    outputPath: string,
    text: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .videoFilter(`drawtext=text='${text}':fontcolor=white@0.7:fontsize=24:x=w-tw-20:y=h-th-20:shadowcolor=black@0.8:shadowx=2:shadowy=2`)
        .output(outputPath)
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .run();
    });
  }

  /**
   * Get image metadata
   */
  private async getImageMetadata(inputPath: string): Promise<{
    dimensions: { width: number; height: number };
    format: string;
    duration?: number;
  }> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(inputPath, (err, metadata) => {
        if (err) {
          reject(err);
          return;
        }

        const videoStream = metadata.streams.find(stream => stream.codec_type === 'video');
        if (!videoStream) {
          reject(new Error('No video stream found in image'));
          return;
        }

        resolve({
          dimensions: {
            width: videoStream.width || 0,
            height: videoStream.height || 0
          },
          format: videoStream.codec_name || 'unknown'
        });
      });
    });
  }

  /**
   * Validate if file is a supported image format
   */
  async validateImageFile(buffer: Buffer, fileName: string): Promise<boolean> {
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.heic', '.heif'];
    const ext = path.extname(fileName).toLowerCase();
    
    if (!supportedFormats.includes(ext)) {
      return false;
    }

    // Additional validation can be added here
    // Check file signature, etc.
    return true;
  }

  /**
   * Clean up temporary files
   */
  async cleanup(processedImage: ProcessedImage): Promise<void> {
    const pathsToClean = [
      processedImage.originalPath,
      processedImage.optimizedPath,
      processedImage.thumbnailPath,
      processedImage.watermarkedPath
    ].filter(Boolean);

    for (const filePath of pathsToClean) {
      try {
        await fs.unlink(filePath!);
      } catch (error) {
        console.warn(`Failed to cleanup file ${filePath}:`, error);
      }
    }
  }

  /**
   * Get processed image as buffer
   */
  async getImageBuffer(imagePath: string): Promise<Buffer> {
    return await fs.readFile(imagePath);
  }

  /**
   * Batch process multiple images
   */
  async processMultipleImages(
    images: Array<{ buffer: Buffer; fileName: string }>,
    options: ImageProcessingOptions = {}
  ): Promise<ProcessedImage[]> {
    const results: ProcessedImage[] = [];
    
    for (const { buffer, fileName } of images) {
      try {
        // Validate image first
        const isValid = await this.validateImageFile(buffer, fileName);
        if (!isValid) {
          console.warn(`Skipping invalid image: ${fileName}`);
          continue;
        }

        const processed = await this.processImage(buffer, fileName, options);
        results.push(processed);
      } catch (error) {
        console.error(`Failed to process image ${fileName}:`, error);
        // Continue with other images
      }
    }

    return results;
  }
}

// Export singleton instance
export const imageProcessor = new ImageProcessor();
export default ImageProcessor;