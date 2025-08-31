<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods:  POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
         

include_once '../../class/quotation.php';

// Your API token and URL.
//$token = "2KfdaAQ8xCDc2VicbDcNzFhaxVWtov";
$token = "WGfdU9N2vESmERtVq8BN3gMT4rD1zd";
//$token2 = "T45sXmmy0o2TnbquAPsrKaFIKw1W7A";
$url = "https://api.gripp.com/public/api3.php";



$zipcode = $_POST['postalCode'];
$zipcode = strtoupper($zipcode);
$zipcode=substr($zipcode,0,4).' '.substr($zipcode,-2,2);

$API = new com_gripp_API($token, $url);
//$API2 = new com_gripp_API($token2, $url);no

$fields = array(
    	'notes' => $_POST['requestDescription'],
	'active' => true,
	'foundationdate' => "2017-09-28",
	'invoicesendby' => "EMAIL",
	'invoiceemail' => $_POST['email'],
	'visitingaddress_street' => ucfirst($_POST['street']),
	'visitingaddress_zipcode' => $zipcode,
	'visitingaddress_streetnumber' => $_POST['houseNumber'],
	'visitingaddress_city' => ucfirst($_POST['city']),
	'email' => $_POST['email'],
	'phone' => format_phone($_POST['phoneNumber']),
	'relationtype' => "PRIVATEPERSON",
	'firstname' => ucfirst($_POST['firstName']),
	'infix'=> $_POST['infix'],
	'companyroles'=>[1],
	'lastname' => ucfirst($_POST['lastName'])
);
$batchresponse = $API->company_create($fields);
//$batchresponse2 = $API2->company_create($fields);

$response = $batchresponse[0]['result'];
//$response2 = $batchresponse2[0]['result'];


if($batchresponse == null){
    http_response_code(400);
} else{
    echo json_encode($response);
    http_response_code(201);
}



?>