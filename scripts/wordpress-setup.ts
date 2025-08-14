#!/usr/bin/env tsx

/**
 * WordPress Setup and Content Migration Script
 * Run with: npx tsx scripts/wordpress-setup.ts
 */

import { syncAllExistingContent, createWordPressPost } from '../lib/wordpress-sync';

async function setupWordPress() {
  console.log('🚀 Starting WordPress setup and content migration...\n');

  try {
    // Check WordPress connection
    console.log('📡 Testing WordPress connection...');
    const testResponse = await fetch(process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query TestConnection {
            generalSettings {
              title
              url
            }
          }
        `
      })
    });

    if (!testResponse.ok) {
      throw new Error(`WordPress connection failed: ${testResponse.status}`);
    }

    const testData = await testResponse.json();
    console.log(`✅ Connected to WordPress: ${testData.data.generalSettings.title}`);
    console.log(`   URL: ${testData.data.generalSettings.url}\n`);

    // Sync existing content
    console.log('📚 Syncing existing content to WordPress...');
    await syncAllExistingContent();
    
    console.log('\n🎉 WordPress setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Login to WordPress admin to review content');
    console.log('2. Configure ACF fields if not already done');
    console.log('3. Set up SEO settings in RankMath');
    console.log('4. Test revalidation webhooks');
    console.log('5. Add images to WordPress Media Library');

  } catch (error) {
    console.error('❌ WordPress setup failed:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Ensure WordPress is running (check WORDPRESS_API_URL)');
    console.log('2. Verify WPGraphQL plugin is installed and active');
    console.log('3. Check custom post types are registered');
    console.log('4. Confirm ACF fields are configured');
    process.exit(1);
  }
}

// Sample content creation for testing
async function createSampleContent() {
  console.log('📝 Creating sample content for testing...\n');

  const sampleLocations = [
    {
      title: 'Test TBGS Eindhoven',
      content: '<h2>Test Location</h2><p>This is a test location page created via script.</p>',
      country: 'nl',
      city: 'eindhoven',
      intro: 'Test intro text for Eindhoven location page',
      coordinates: { lat: 51.4416, lng: 5.4697 },
    }
  ];

  for (const location of sampleLocations) {
    try {
      const post = await createWordPressPost('location', location);
      console.log(`✅ Created sample location: ${post.title}`);
    } catch (error) {
      console.error(`❌ Failed to create ${location.title}:`, error);
    }
  }
}

// Run setup
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'sample') {
    createSampleContent();
  } else {
    setupWordPress();
  }
}