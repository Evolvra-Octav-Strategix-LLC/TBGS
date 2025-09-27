#!/usr/bin/env tsx

/**
 * WebP Conversion Script
 * Converts all PNG/JPG images in the project to WebP format with 85% quality
 */

import { WebPConverter } from '../utils/webp-converter.js';
import path from 'path';

async function main() {
  console.log('🚀 Starting WebP conversion process...\n');

  const converter = new WebPConverter(85, 'client/src/assets/webp');
  
  // Directories to search for images
  const searchDirectories = [
    'client/src/assets',
    'attached_assets',
    'public'
  ];

  const allResults: any[] = [];

  for (const dir of searchDirectories) {
    try {
      console.log(`\n📂 Processing directory: ${dir}`);
      console.log('='.repeat(50));
      
      const results = await converter.convertDirectory(dir);
      allResults.push(...results);
      
      if (results.length > 0) {
        console.log(`✅ Successfully converted ${results.length} images from ${dir}`);
      } else {
        console.log(`ℹ️ No images found in ${dir}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${dir}:`, error);
    }
  }

  // Final summary
  console.log('\n🎯 FINAL CONVERSION SUMMARY');
  console.log('='.repeat(60));
  
  if (allResults.length > 0) {
    const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
    const totalWebP = allResults.reduce((sum, r) => sum + r.webpSize, 0);
    const overallSavings = ((totalOriginal - totalWebP) / totalOriginal) * 100;
    
    console.log(`📊 Total images converted: ${allResults.length}`);
    console.log(`📦 Original total size: ${WebPConverter.formatFileSize(totalOriginal)}`);
    console.log(`🗜️ WebP total size: ${WebPConverter.formatFileSize(totalWebP)}`);
    console.log(`💾 Total space saved: ${WebPConverter.formatFileSize(totalOriginal - totalWebP)}`);
    console.log(`⚡ Overall compression: ${overallSavings.toFixed(1)}%`);
    
    console.log('\n📋 Converted files:');
    allResults.forEach((result, index) => {
      console.log(`${index + 1}. ${path.basename(result.originalPath)} → ${path.basename(result.webpPath)} (${result.compressionRatio.toFixed(1)}% smaller)`);
    });
  } else {
    console.log('ℹ️ No images were converted. Make sure there are PNG/JPG files in the specified directories.');
  }

  console.log('\n✅ WebP conversion completed!');
  console.log('🔧 Next steps:');
  console.log('   1. Update component imports to use .webp extensions');
  console.log('   2. Test website to ensure all images load correctly');
  console.log('   3. Consider uploading WebP files to Nextcloud for sync');
}

// Run the conversion
main().catch(console.error);