interface GrippCompanyData {
  notes: string;
  active: boolean;
  foundationdate: string;
  invoicesendby: string;
  invoiceemail: string;
  visitingaddress_street: string;
  visitingaddress_zipcode: string;
  visitingaddress_streetnumber: string;
  visitingaddress_city: string;
  email: string;
  phone: string;
  relationtype: string;
  firstname: string;
  infix?: string;
  companyroles: number[];
  lastname: string;
}

interface GrippApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

function formatPhone(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as Dutch phone number
  if (digits.length === 10 && digits.startsWith('0')) {
    return `+31 ${digits.substring(1, 2)} ${digits.substring(2, 5)} ${digits.substring(5, 7)} ${digits.substring(7)}`;
  } else if (digits.length === 9) {
    return `+31 ${digits.substring(0, 1)} ${digits.substring(1, 4)} ${digits.substring(4, 6)} ${digits.substring(6)}`;
  }
  
  return phone; // Return original if can't format
}

function formatZipcode(zipcode: string): string {
  const cleaned = zipcode.replace(/\s/g, '').toUpperCase();
  if (cleaned.length === 6) {
    return `${cleaned.substring(0, 4)} ${cleaned.substring(4)}`;
  }
  return zipcode;
}

async function tryGrippRequest(apiToken: string, jsonRpcRequest: any[], apiUrl: string): Promise<GrippApiResponse> {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    },
    body: JSON.stringify(jsonRpcRequest)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const batchResponse = await response.json();
  
  // Check for API-level errors in the response
  if (batchResponse && Array.isArray(batchResponse) && batchResponse[0] && batchResponse[0].error) {
    throw new Error(`Gripp API Error: ${JSON.stringify(batchResponse[0].error)}`);
  }

  return batchResponse;
}

export async function createGrippCompany(formData: {
  requestDescription: string;
  email: string;
  street: string;
  postalCode: string;
  houseNumber: string;
  city: string;
  phoneNumber: string;
  firstName: string;
  infix?: string;
  lastName: string;
}): Promise<GrippApiResponse> {
  // Available API tokens with the new token you provided
  const tokens = [
    process.env.GRIPP_API_TOKEN_1 || "WGfdU9N2vESmERtVq8BN3gMT4rD1zd",
    process.env.GRIPP_API_TOKEN_2 || "2KfdaAQ8xCDc2VicbDcNzFhaxVWtov"
  ].filter(Boolean); // Remove any undefined/empty tokens

  try {
    console.log('🔍 Available tokens:', tokens.map((token, i) => `API ${i + 1}: ${token.substring(0, 8)}...`));
    
    const apiUrl = "https://api.gripp.com/public/api3.php";
    
    // Prepare the company data in Gripp format
    const companyData: GrippCompanyData = {
      notes: formData.requestDescription,
      active: true,
      foundationdate: "2017-09-28",
      invoicesendby: "EMAIL",
      invoiceemail: formData.email,
      visitingaddress_street: formData.street.charAt(0).toUpperCase() + formData.street.slice(1).toLowerCase(),
      visitingaddress_zipcode: formatZipcode(formData.postalCode),
      visitingaddress_streetnumber: formData.houseNumber,
      visitingaddress_city: formData.city.charAt(0).toUpperCase() + formData.city.slice(1).toLowerCase(),
      email: formData.email,
      phone: formatPhone(formData.phoneNumber),
      relationtype: "PRIVATEPERSON",
      firstname: formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1).toLowerCase(),
      infix: formData.infix || "",
      companyroles: [1],
      lastname: formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1).toLowerCase()
    };

    // Create JSON-RPC request structure exactly like the PHP API connector
    const jsonRpcRequest = [{
      method: "company.create",
      params: [companyData],
      id: 1
    }];

    console.log('🔄 Sending Gripp JSON-RPC request...');
    console.log('📋 Company fields:', companyData);

    // Send to BOTH API keys simultaneously
    const results = [];
    let hasSuccess = false;
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      console.log(`🔑 Sending to Gripp API ${i + 1}/${tokens.length}...`);
      
      try {
        const batchResponse = await tryGrippRequest(token, jsonRpcRequest, apiUrl);
        console.log(`✅ Gripp API ${i + 1} batch response:`, batchResponse);

        // Extract result like PHP code: $response = $batchresponse[0]['result'];
        if (batchResponse && Array.isArray(batchResponse) && batchResponse[0] && batchResponse[0].result) {
          const result = batchResponse[0].result;
          console.log(`✅ Gripp company created successfully in API ${i + 1}:`, result);
          results.push({
            api: i + 1,
            success: true,
            data: result
          });
          hasSuccess = true;
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error(`❌ API ${i + 1} failed:`, error instanceof Error ? error.message : error);
        results.push({
          api: i + 1,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Return success if at least one API succeeded
    if (hasSuccess) {
      console.log(`✅ Customer created in ${results.filter(r => r.success).length}/${tokens.length} Gripp systems`);
      return {
        success: true,
        data: {
          results: results,
          summary: `Created in ${results.filter(r => r.success).length}/${tokens.length} systems`
        }
      };
    } else {
      console.error('❌ All Gripp APIs failed');
      return {
        success: false,
        error: 'Failed to create customer in any Gripp system',
        data: { results }
      };
    }

  } catch (error) {
    console.error('❌ Gripp API error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}