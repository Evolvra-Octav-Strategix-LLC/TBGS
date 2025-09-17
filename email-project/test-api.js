// Simple test script to verify the email API
const http = require('http');

const testData = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com", 
  phone: "06-12345678",
  selectedService: "Daklekkage reparatie",
  address: "Amsterdam, Netherlands",
  projectDescription: "Test contact form submission",
  contactPreference: "Email"
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🧪 Testing TBGS Email API...');

const req = http.request(options, (res) => {
  console.log(`📊 Status: ${res.statusCode}`);
  console.log(`📋 Headers:`, res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('📧 Response:', JSON.parse(data));
    
    if (res.statusCode === 200) {
      console.log('✅ Test passed! Email API working correctly.');
    } else {
      console.log('❌ Test failed! Check your environment variables.');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Test error:', error.message);
  console.log('💡 Make sure the server is running: npm start');
});

req.write(postData);
req.end();

console.log('📤 Test request sent...');