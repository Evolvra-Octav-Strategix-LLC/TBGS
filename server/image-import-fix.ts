// Quick debug script to test the path construction issue
import { createClient } from 'webdav';
import dotenv from 'dotenv';

dotenv.config();

async function testPaths() {
  // Setup client exactly like the sync service
  let baseUrl = process.env.NEXTCLOUD_URL || 'https://nextcloud.evolvra.ai';
  if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
    baseUrl = 'https://' + baseUrl;
  }
  baseUrl = baseUrl.replace(/\/$/, '');
  
  const webdavUrl = `${baseUrl}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME || ''}`;
  const client = createClient(webdavUrl, {
    username: process.env.NEXTCLOUD_USERNAME || '',
    password: process.env.NEXTCLOUD_PASSWORD || '',
  });

  console.log('🔗 WebDAV URL:', webdavUrl);
  console.log('📁 Testing path construction...');

  try {
    // Test 1: Root directory listing
    console.log('\n📂 ROOT DIRECTORY:');
    const rootContents = await client.getDirectoryContents('/');
    console.log('Available directories:', rootContents.map((item: any) => item.basename));
    
    // Test 2: Website Images directory
    console.log('\n📂 WEBSITE IMAGES DIRECTORY:');
    const websiteContents = await client.getDirectoryContents('/Website Images');
    console.log('Files in Website Images root:', websiteContents.map((item: any) => `${item.basename} (${item.type})`));
    
    // Test 3: Subdirectory (if exists)
    console.log('\n📂 ALGEMEEN SUBDIRECTORY:');
    try {
      const algemeenContents = await client.getDirectoryContents('/Website Images/algemeen');
      console.log('Files in algemeen:', algemeenContents.slice(0, 5).map((item: any) => item.basename));
    } catch (error) {
      console.log('Could not access algemeen directory');
    }

    // Test 4: Direct file access
    console.log('\n🔗 TESTING DIRECT FILE ACCESS:');
    const testPaths = [
      '/Website Images/logo-tbgs.png',  // If in root
      '/Website Images/algemeen/logo-tbgs.png', // If in subdir
    ];

    for (const testPath of testPaths) {
      try {
        const fileExists = await client.exists(testPath);
        console.log(`${testPath}: ${fileExists ? '✅ EXISTS' : '❌ NOT FOUND'}`);
      } catch (error) {
        console.log(`${testPath}: ❌ ERROR - ${error.message}`);
      }
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testPaths();