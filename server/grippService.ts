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
  try {
    // Check for available API token environment variables
    const apiToken = process.env.GRIPP_API_TOKEN_1 || 
                    process.env.GRIPP_API_TOKEN_2 || 
                    "WGfdU9N2vESmERtVq8BN3gMT4rD1zd"; // Fallback to your token
    
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

    // Make API call to Gripp using JSON-RPC format
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
      console.error('❌ Gripp API HTTP Error:', response.status, errorText);
      return {
        success: false,
        error: `HTTP ${response.status}: ${errorText}`
      };
    }

    const batchResponse = await response.json();
    console.log('✅ Gripp API batch response:', batchResponse);

    // Extract result like PHP code: $response = $batchresponse[0]['result'];
    if (batchResponse && Array.isArray(batchResponse) && batchResponse[0] && batchResponse[0].result) {
      const result = batchResponse[0].result;
      console.log('✅ Gripp company created successfully:', result);
      return {
        success: true,
        data: result
      };
    } else {
      console.error('❌ Unexpected Gripp API response format:', batchResponse);
      return {
        success: false,
        error: 'Unexpected API response format'
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