import cron from 'node-cron';
import { nextcloudSync } from './nextcloud-sync';

interface SchedulerStats {
  totalRuns: number;
  lastRunTime: Date | null;
  lastRunStatus: 'success' | 'error' | 'pending';
  lastRunStats?: { success: number; errors: number; skipped: number };
  lastError?: string;
}

class NextcloudScheduler {
  private isRunning = false;
  private stats: SchedulerStats = {
    totalRuns: 0,
    lastRunTime: null,
    lastRunStatus: 'pending'
  };

  async initialize() {
    try {
      // Initialize the Nextcloud sync service
      await nextcloudSync.initialize();
      
      // Start the 1-minute cron job
      this.startScheduler();
      
      console.log('🔄 Nextcloud scheduler initialized - syncing every minute');
    } catch (error) {
      console.error('❌ Failed to initialize Nextcloud scheduler:', error);
      throw error;
    }
  }

  private startScheduler() {
    // Run every minute: '*/1 * * * *'
    // For testing, you can change to every 10 seconds: '*/10 * * * * *'
    cron.schedule('*/1 * * * *', async () => {
      await this.performSync();
    }, {
      scheduled: true,
      timezone: "Europe/Amsterdam"
    });

    console.log('⏰ Nextcloud sync scheduled for every 1 minute');
  }

  private async performSync() {
    if (this.isRunning) {
      console.log('⏭️ Sync already running, skipping this cycle');
      return;
    }

    this.isRunning = true;
    this.stats.totalRuns++;
    this.stats.lastRunTime = new Date();
    this.stats.lastRunStatus = 'pending';

    try {
      console.log(`🔄 Scheduled sync #${this.stats.totalRuns} starting...`);
      
      const syncStats = await nextcloudSync.syncImages();
      
      this.stats.lastRunStatus = 'success';
      this.stats.lastRunStats = syncStats;
      this.stats.lastError = undefined;

      if (syncStats.success > 0 || syncStats.errors > 0) {
        console.log(`✅ Scheduled sync completed: ${syncStats.success} success, ${syncStats.errors} errors, ${syncStats.skipped} skipped`);
      } else {
        console.log(`⏭️ Scheduled sync: no changes detected (${syncStats.skipped} skipped)`);
      }

    } catch (error) {
      this.stats.lastRunStatus = 'error';
      this.stats.lastError = error instanceof Error ? error.message : 'Unknown error';
      
      console.error(`❌ Scheduled sync #${this.stats.totalRuns} failed:`, error);
    } finally {
      this.isRunning = false;
    }
  }

  getStats(): SchedulerStats {
    return { ...this.stats };
  }

  // Manual trigger for testing
  async triggerManualSync(): Promise<{ success: number; errors: number; skipped: number }> {
    if (this.isRunning) {
      throw new Error('Sync already in progress');
    }

    console.log('🔄 Manual sync triggered via API...');
    return await nextcloudSync.syncImages();
  }

  isCurrentlyRunning(): boolean {
    return this.isRunning;
  }
}

// Singleton instance
export const nextcloudScheduler = new NextcloudScheduler();