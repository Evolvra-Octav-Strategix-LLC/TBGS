import { db } from './db';
import { imageTasks } from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import ImageProcessor from './imageProcessor';
import path from 'path';
import fs from 'fs/promises';

interface TaskProcessor {
  start(): void;
  stop(): void;
  addImageTask(taskData: {
    originalPath: string;
    originalName: string;
    parentType: string;
    parentId: string;
    processingOptions?: any;
  }): Promise<string>;
}

export class BackgroundTaskProcessor implements TaskProcessor {
  private isRunning = false;
  private intervalId?: NodeJS.Timeout;
  private imageProcessor: ImageProcessor;

  constructor() {
    this.imageProcessor = new ImageProcessor();
  }

  async addImageTask(taskData: {
    originalPath: string;
    originalName: string;
    parentType: string;
    parentId: string;
    processingOptions?: any;
  }): Promise<string> {
    const [task] = await db.insert(imageTasks).values({
      originalPath: taskData.originalPath,
      originalName: taskData.originalName,
      parentType: taskData.parentType,
      parentId: taskData.parentId,
      processingOptions: taskData.processingOptions || {},
      status: 'pending'
    }).returning();

    console.log(`✓ Queued image task ${task.id} for ${taskData.originalName}`);
    return task.id;
  }

  start(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 Background task processor started');
    
    // Process tasks every 2 seconds
    this.intervalId = setInterval(async () => {
      await this.processPendingTasks();
    }, 2000);
  }

  stop(): void {
    if (!this.isRunning) return;
    
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    console.log('⏹️ Background task processor stopped');
  }

  private async processPendingTasks(): Promise<void> {
    try {
      // Get next pending task
      const [pendingTask] = await db
        .select()
        .from(imageTasks)
        .where(eq(imageTasks.status, 'pending'))
        .orderBy(imageTasks.createdAt)
        .limit(1);

      if (!pendingTask) return;

      console.log(`🔄 Processing image task ${pendingTask.id}: ${pendingTask.originalName}`);

      // Mark as processing
      await db
        .update(imageTasks)
        .set({ 
          status: 'processing',
          startedAt: new Date()
        })
        .where(eq(imageTasks.id, pendingTask.id));

      try {
        // Read the original file
        const fileBuffer = await fs.readFile(pendingTask.originalPath);
        
        // Process the image
        const result = await this.imageProcessor.processImage(
          fileBuffer,
          pendingTask.originalName,
          pendingTask.processingOptions || {}
        );

        // Update task with results
        await db
          .update(imageTasks)
          .set({
            status: 'completed',
            result: {
              originalSize: result.metadata.originalSize,
              optimizedSize: result.metadata.optimizedSize,
              compressionRatio: result.metadata.compressionRatio,
              dimensions: result.metadata.dimensions,
              compressedPath: result.optimizedPath,
              watermarkedPath: result.watermarkedPath,
              thumbnailPath: result.thumbnailPath
            },
            completedAt: new Date()
          })
          .where(eq(imageTasks.id, pendingTask.id));

        console.log(`✅ Completed image task ${pendingTask.id}: ${pendingTask.originalName}`);
        console.log(`   Compression: ${(result.metadata.originalSize / 1024).toFixed(1)}KB → ${(result.metadata.optimizedSize / 1024).toFixed(1)}KB (${result.metadata.compressionRatio}% reduction)`);

        // Clean up original file after processing
        try {
          await fs.unlink(pendingTask.originalPath);
        } catch (cleanupError) {
          console.warn(`Failed to cleanup original file ${pendingTask.originalPath}:`, cleanupError);
        }

      } catch (processingError) {
        console.error(`❌ Failed to process image task ${pendingTask.id}:`, processingError);
        
        // Mark task as failed
        await db
          .update(imageTasks)
          .set({
            status: 'failed',
            errorMessage: processingError instanceof Error ? processingError.message : 'Unknown error',
            completedAt: new Date()
          })
          .where(eq(imageTasks.id, pendingTask.id));
      }

    } catch (error) {
      console.error('Background task processor error:', error);
    }
  }

  async getTaskStatus(taskId: string): Promise<any> {
    const [task] = await db
      .select()
      .from(imageTasks)
      .where(eq(imageTasks.id, taskId));

    return task || null;
  }

  async getTasksByParent(parentType: string, parentId: string): Promise<any[]> {
    return await db
      .select()
      .from(imageTasks)
      .where(and(
        eq(imageTasks.parentType, parentType),
        eq(imageTasks.parentId, parentId)
      ))
      .orderBy(imageTasks.createdAt);
  }
}

// Global task processor instance
export const taskProcessor = new BackgroundTaskProcessor();