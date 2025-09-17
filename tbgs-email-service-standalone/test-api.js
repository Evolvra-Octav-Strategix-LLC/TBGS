// Comprehensive test script for TBGS Email Service Enhanced
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

// Test configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const TIMEOUT = 30000; // 30 seconds

// Test colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// Log helper
const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

// Create test files for file processing tests
const createTestFiles = async () => {
  log('📝 Creating test files...', 'blue');
  
  // Create a simple text file
  const textContent = 'This is a test file for TBGS Email Service Enhanced testing.';
  fs.writeFileSync('test-document.txt', textContent);
  
  // Create a simple SVG image for testing
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#3498db"/>
  <text x="50" y="55" font-family="Arial" font-size="12" fill="white" text-anchor="middle">TEST</text>
</svg>`;
  fs.writeFileSync('test-image.svg', svgContent);
  
  log('✅ Test files created', 'green');
};

// Clean up test files
const cleanupTestFiles = () => {
  const testFiles = ['test-document.txt', 'test-image.svg'];
  testFiles.forEach(file => {
    try {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    } catch (error) {
      log(`⚠️  Failed to cleanup ${file}: ${error.message}`, 'yellow');
    }
  });
  log('🗑️  Test files cleaned up', 'blue');
};

// Test cases
const tests = [
  {
    name: 'Health Check',
    run: async () => {
      const response = await axios.get(`${BASE_URL}/api/health`, { timeout: TIMEOUT });
      
      if (response.status !== 200) {
        throw new Error(`Expected status 200, got ${response.status}`);
      }
      
      const expected = ['status', 'service', 'version', 'timestamp', 'features'];
      expected.forEach(field => {
        if (!response.data.hasOwnProperty(field)) {
          throw new Error(`Missing field: ${field}`);
        }
      });
      
      if (response.data.status !== 'healthy') {
        throw new Error(`Expected healthy status, got ${response.data.status}`);
      }
      
      if (!response.data.features.includes('ffmpeg-processing')) {
        throw new Error('Missing ffmpeg-processing feature');
      }
      
      return response.data;
    }
  },
  
  {
    name: 'Legacy Contact Form (JSON)',
    run: async () => {
      const testData = {
        emailData: {
          firstName: 'John',
          lastName: 'TestUser',
          email: 'john.test@example.com',
          phone: '+31612345678',
          selectedService: 'API Testing Service',
          address: 'Teststraat 123, 1234 AB Amsterdam',
          projectDescription: 'This is a test submission from the API test suite',
          contactPreference: 'Email',
          formType: 'api-test'
        }
      };
      
      const response = await axios.post(`${BASE_URL}/api/contact-legacy`, testData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: TIMEOUT
      });
      
      if (response.status !== 200) {
        throw new Error(`Expected status 200, got ${response.status}`);
      }
      
      if (!response.data.success) {
        throw new Error(`Request failed: ${response.data.message}`);
      }
      
      return response.data;
    }
  },
  
  {
    name: 'Enhanced Contact Form (Multipart)',
    run: async () => {
      const form = new FormData();
      
      // Add form data
      form.append('firstName', 'Jane');
      form.append('lastName', 'TestUser');
      form.append('email', 'jane.test@example.com');
      form.append('phone', '+31687654321');
      form.append('selectedService', 'Multipart API Testing');
      form.append('address', 'Testlaan 456, 5678 CD Rotterdam');
      form.append('projectDescription', 'Testing multipart form submission with file uploads');
      form.append('contactPreference', 'WhatsApp');
      
      // Add test file if it exists
      if (fs.existsSync('test-document.txt')) {
        form.append('files', fs.createReadStream('test-document.txt'));
      }
      
      const response = await axios.post(`${BASE_URL}/api/contact`, form, {
        headers: {
          ...form.getHeaders()
        },
        timeout: TIMEOUT
      });
      
      if (response.status !== 200) {
        throw new Error(`Expected status 200, got ${response.status}`);
      }
      
      if (!response.data.success) {
        throw new Error(`Request failed: ${response.data.message}`);
      }
      
      return response.data;
    }
  },
  
  {
    name: 'File Upload Processing',
    run: async () => {
      const form = new FormData();
      
      // Add minimal required form data
      form.append('firstName', 'FileTest');
      form.append('lastName', 'User');
      form.append('email', 'filetest@example.com');
      form.append('phone', '+31611111111');
      form.append('selectedService', 'File Processing Test');
      form.append('projectDescription', 'Testing file processing capabilities');
      
      // Add multiple test files
      if (fs.existsSync('test-document.txt')) {
        form.append('files', fs.createReadStream('test-document.txt'));
      }
      if (fs.existsSync('test-image.svg')) {
        form.append('files', fs.createReadStream('test-image.svg'));
      }
      
      const response = await axios.post(`${BASE_URL}/api/contact`, form, {
        headers: {
          ...form.getHeaders()
        },
        timeout: TIMEOUT
      });
      
      if (response.status !== 200) {
        throw new Error(`Expected status 200, got ${response.status}`);
      }
      
      if (!response.data.success) {
        throw new Error(`Request failed: ${response.data.message}`);
      }
      
      // Check if file processing information is included
      if (response.data.filesProcessed === undefined) {
        throw new Error('Missing filesProcessed field in response');
      }
      
      return response.data;
    }
  },
  
  {
    name: 'Input Validation - Missing Required Fields',
    run: async () => {
      const invalidData = {
        firstName: 'Test',
        // Missing lastName, email, phone, selectedService
        projectDescription: 'This should fail validation'
      };
      
      try {
        await axios.post(`${BASE_URL}/api/contact`, invalidData, {
          headers: { 'Content-Type': 'application/json' },
          timeout: TIMEOUT
        });
        throw new Error('Expected validation error, but request succeeded');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          return { validationWorking: true, error: error.response.data };
        }
        throw error;
      }
    }
  },
  
  {
    name: 'Input Validation - Invalid Email',
    run: async () => {
      const invalidData = {
        firstName: 'Test',
        lastName: 'User',
        email: 'invalid-email-format',
        phone: '+31612345678',
        selectedService: 'Test Service'
      };
      
      try {
        await axios.post(`${BASE_URL}/api/contact`, invalidData, {
          headers: { 'Content-Type': 'application/json' },
          timeout: TIMEOUT
        });
        throw new Error('Expected validation error for invalid email');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          return { emailValidationWorking: true, error: error.response.data };
        }
        throw error;
      }
    }
  },
  
  {
    name: 'Rate Limiting Test',
    run: async () => {
      log('⚠️  Rate limiting test may take some time...', 'yellow');
      
      const testData = {
        firstName: 'Rate',
        lastName: 'Test',
        email: 'ratetest@example.com',
        phone: '+31600000000',
        selectedService: 'Rate Limit Test'
      };
      
      // Try to exceed rate limit (50 requests in 15 minutes)
      // We'll just test a few requests quickly
      const promises = [];
      for (let i = 0; i < 5; i++) {
        promises.push(
          axios.post(`${BASE_URL}/api/contact-legacy`, { emailData: testData }, {
            headers: { 'Content-Type': 'application/json' },
            timeout: TIMEOUT
          }).catch(err => err.response || err)
        );
      }
      
      const results = await Promise.all(promises);
      const successCount = results.filter(r => r.status === 200).length;
      
      return { 
        totalRequests: 5, 
        successfulRequests: successCount,
        rateLimitActive: successCount < 5 
      };
    }
  }
];

// Main test runner
const runTests = async () => {
  log(`\n${colors.bold}🧪 TBGS Email Service Enhanced - API Test Suite${colors.reset}`, 'blue');
  log(`Testing service at: ${BASE_URL}\n`, 'blue');
  
  // Create test files
  await createTestFiles();
  
  const results = {
    passed: 0,
    failed: 0,
    total: tests.length,
    details: []
  };
  
  for (const test of tests) {
    try {
      log(`🔍 Running: ${test.name}`, 'blue');
      const startTime = Date.now();
      
      const result = await test.run();
      const duration = Date.now() - startTime;
      
      log(`✅ PASSED: ${test.name} (${duration}ms)`, 'green');
      results.passed++;
      results.details.push({
        name: test.name,
        status: 'PASSED',
        duration,
        result
      });
      
    } catch (error) {
      const duration = Date.now() - Date.now();
      log(`❌ FAILED: ${test.name} - ${error.message}`, 'red');
      results.failed++;
      results.details.push({
        name: test.name,
        status: 'FAILED',
        duration,
        error: error.message
      });
    }
  }
  
  // Cleanup test files
  cleanupTestFiles();
  
  // Print summary
  log('\n' + '='.repeat(50), 'blue');
  log(`${colors.bold}📊 Test Results Summary${colors.reset}`, 'blue');
  log(`Total Tests: ${results.total}`, 'blue');
  log(`Passed: ${results.passed}`, 'green');
  log(`Failed: ${results.failed}`, results.failed > 0 ? 'red' : 'green');
  log(`Success Rate: ${((results.passed / results.total) * 100).toFixed(1)}%`, 
       results.failed > 0 ? 'yellow' : 'green');
  
  if (results.failed > 0) {
    log('\n❌ Failed Tests:', 'red');
    results.details
      .filter(test => test.status === 'FAILED')
      .forEach(test => {
        log(`  • ${test.name}: ${test.error}`, 'red');
      });
  }
  
  log('\n✨ Test suite completed', 'blue');
  
  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
};

// Handle script execution
if (require.main === module) {
  runTests().catch(error => {
    log(`💥 Test suite crashed: ${error.message}`, 'red');
    cleanupTestFiles();
    process.exit(1);
  });
}

module.exports = { runTests };