// Gripp API webhook for creating companies/customers
// Based on the original PHP implementation

const GRIPP_API_URL = "https://api.gripp.com/public/api3.php";

// Phone number formatting function (matching PHP format_phone)
function formatPhone(phoneNumber) {
  if (!phoneNumber) return '';
  
  // Remove all non-digit characters
  let cleaned = phoneNumber.replace(/\D/g, '');
  
  // Handle Dutch numbers
  if (cleaned.startsWith('31')) {
    // International format starting with 31
    cleaned = '0' + cleaned.substring(2);
  } else if (cleaned.startsWith('0031')) {
    // International format starting with 0031
    cleaned = '0' + cleaned.substring(4);
  } else if (!cleaned.startsWith('0') && cleaned.length === 9) {
    // Mobile number without leading 0
    cleaned = '0' + cleaned;
  }
  
  // Format as +31 x xxxx xxxx
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return '+31 ' + cleaned.substring(1, 2) + ' ' + 
           cleaned.substring(2, 6) + ' ' + cleaned.substring(6);
  }
  
  return phoneNumber; // Return original if formatting fails
}

// Zipcode formatting function (matching PHP logic)
function formatZipcode(zipcode) {
  if (!zipcode) return '';
  
  // Remove spaces and convert to uppercase
  const cleaned = zipcode.replace(/\s/g, '').toUpperCase();
  
  // Format as "1234 AB"
  if (cleaned.length >= 6) {
    return cleaned.substr(0, 4) + ' ' + cleaned.substr(-2, 2);
  }
  
  return zipcode;
}

// Gripp API client class (simplified version of com_gripp_API)
class GrippAPI {
  constructor(token, url) {
    this.token = token;
    this.url = url;
  }

  async company_create(fields) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          method: 'company_create',
          params: fields,
          token: this.token
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return [{ result: data }];
    } catch (error) {
      console.error('Gripp API Error:', error);
      return null;
    }
  }
}

// Main webhook handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🔥 Gripp webhook called');

  try {
    const data = req.body;

    // Get API tokens from environment
    const token1 = process.env.GRIPP_API_TOKEN_1; // WGfdU9N2vESmERtVq8BN3gMT4rD1zd
    const token2 = process.env.GRIPP_API_TOKEN_2; // 2KfdaAQ8xCDc2VicbDcNzFhaxVWtov

    if (!token1 || !token2) {
      console.error('Missing Gripp API tokens');
      return res.status(500).json({ error: 'API configuration error' });
    }

    // Format zipcode exactly like PHP
    const formattedZipcode = formatZipcode(data.postcode || data.zipcode);

    // Prepare fields exactly matching PHP implementation
    const fields = {
      notes: data.requestDescription || data.projectDescription || data.description || '',
      active: true,
      foundationdate: "2017-09-28",
      invoicesendby: "EMAIL",
      invoiceemail: data.email,
      visitingaddress_street: data.street ? data.street.charAt(0).toUpperCase() + data.street.slice(1).toLowerCase() : '',
      visitingaddress_zipcode: formattedZipcode,
      visitingaddress_streetnumber: data.houseNumber || '',
      visitingaddress_city: data.city ? data.city.charAt(0).toUpperCase() + data.city.slice(1).toLowerCase() : '',
      email: data.email,
      phone: formatPhone(data.phone || data.phoneNumber || data.telefoon),
      relationtype: "PRIVATEPERSON",
      firstname: data.firstName ? data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase() : '',
      infix: data.infix || '',
      companyroles: [1],
      lastname: data.lastName ? data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1).toLowerCase() : ''
    };

    console.log('📋 Gripp fields prepared:', {
      ...fields,
      phone: fields.phone ? '[REDACTED]' : '',
      email: fields.email ? '[REDACTED]' : ''
    });

    // Initialize both APIs
    const API1 = new GrippAPI(token1, GRIPP_API_URL);
    const API2 = new GrippAPI(token2, GRIPP_API_URL);

    // Send to both Gripp accounts (matching PHP logic)
    const [response1, response2] = await Promise.all([
      API1.company_create(fields),
      API2.company_create(fields)
    ]);

    console.log('📤 Gripp API responses:', {
      api1: response1 ? 'success' : 'failed',
      api2: response2 ? 'success' : 'failed'
    });

    // Return success if at least one API call succeeded (matching PHP logic)
    if (response1 || response2) {
      return res.status(201).json({
        success: true,
        message: 'Customer created in Gripp',
        responses: {
          api1: response1 ? response1[0]?.result : null,
          api2: response2 ? response2[0]?.result : null
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Failed to create customer in Gripp'
      });
    }

  } catch (error) {
    console.error('Gripp webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}