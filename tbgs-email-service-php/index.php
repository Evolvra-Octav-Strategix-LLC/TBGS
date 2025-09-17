<?php
/**
 * TBGS Email Service - PHP Enhanced v3.0
 * 
 * A reliable PHP-based email service for TBGS contact forms
 * Replaces the Node.js version with better stability and deployment ease
 * 
 * @author TBGS B.V.
 * @version 3.0.0
 * @license MIT
 */

// Error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0); // Set to 0 in production

// Required for Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
} else {
    // Fallback for basic operation without Composer dependencies
    spl_autoload_register(function ($class) {
        $file = __DIR__ . '/src/' . str_replace('\\', '/', str_replace('TBGS\\EmailService\\', '', $class)) . '.php';
        if (file_exists($file)) {
            require_once $file;
        }
    });
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

// Load environment variables if available
if (class_exists('Dotenv\Dotenv') && file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

/**
 * TBGS Email Service Core Class
 */
class TBGSEmailService 
{
    private $config;
    private $smtpStatus;
    
    private const VERSION = '3.0.0';
    private const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
    private const ALLOWED_TYPES = [
        'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif',
        'application/pdf', 'text/plain',
        'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    public function __construct() 
    {
        $this->initConfig();
        $this->initDirectories();
        $this->setupCORS();
        $this->verifySmtpConnection();
    }
    
    private function initConfig() 
    {
        $this->config = [
            'smtp' => [
                'host' => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
                'port' => intval($_ENV['SMTP_PORT'] ?? 587),
                'secure' => ($_ENV['SMTP_PORT'] ?? 587) == 465 ? 'ssl' : 'tls',
                'user' => $_ENV['SMTP_USER'] ?? '',
                'pass' => $_ENV['SMTP_PASS'] ?? '',
            ],
            'contact_receiver' => $_ENV['CONTACT_RECEIVER'] ?? 'info@tbgs.nl',
            'cors_origins' => $_ENV['CORS_ORIGINS'] ?? '*',
            'environment' => $_ENV['APP_ENV'] ?? 'production'
        ];
        
        $this->smtpStatus = [
            'configured' => !empty($this->config['smtp']['user']) && !empty($this->config['smtp']['pass']),
            'connected' => false,
            'error' => null,
            'last_checked' => null
        ];
    }
    
    private function initDirectories() 
    {
        $dirs = ['uploads', 'processed', 'templates'];
        foreach ($dirs as $dir) {
            if (!is_dir(__DIR__ . "/{$dir}")) {
                mkdir(__DIR__ . "/{$dir}", 0755, true);
            }
        }
    }
    
    private function setupCORS() 
    {
        // Handle CORS for browser requests
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        
        if ($this->config['cors_origins'] === '*') {
            header('Access-Control-Allow-Origin: *');
        } else {
            $allowed_origins = array_map('trim', explode(',', $this->config['cors_origins']));
            if (in_array($origin, $allowed_origins)) {
                header("Access-Control-Allow-Origin: {$origin}");
            }
        }
        
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
        
        // Handle preflight OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }
    }
    
    private function verifySmtpConnection() 
    {
        if (!$this->smtpStatus['configured']) {
            $this->smtpStatus['error'] = 'SMTP not configured - missing SMTP_USER or SMTP_PASS';
            $this->log('⚠️  SMTP verification skipped - no credentials configured');
            return;
        }
        
        try {
            $mailer = new PHPMailer(true);
            $mailer->isSMTP();
            $mailer->Host = $this->config['smtp']['host'];
            $mailer->SMTPAuth = true;
            $mailer->Username = $this->config['smtp']['user'];
            $mailer->Password = $this->config['smtp']['pass'];
            $mailer->SMTPSecure = $this->config['smtp']['secure'];
            $mailer->Port = $this->config['smtp']['port'];
            
            // Quick connection test
            $mailer->smtpConnect();
            $mailer->smtpClose();
            
            $this->smtpStatus['connected'] = true;
            $this->smtpStatus['last_checked'] = date('c');
            $this->log("✅ SMTP connection verified successfully");
            
        } catch (Exception $e) {
            $this->smtpStatus['error'] = $e->getMessage();
            $this->smtpStatus['last_checked'] = date('c');
            $this->log("⚠️  SMTP verification failed: " . $e->getMessage());
        }
    }
    
    public function handleRequest() 
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        // Simple routing
        switch ($path) {
            case '/':
                return $this->showStatusPage();
            case '/api/health':
                return $this->healthCheck();
            case '/api/contact':
                if ($method !== 'POST') {
                    return $this->jsonResponse(['error' => 'Method not allowed'], 405);
                }
                return $this->handleContactForm();
            default:
                return $this->jsonResponse(['error' => 'Endpoint not found'], 404);
        }
    }
    
    private function showStatusPage() 
    {
        $statusColor = $this->smtpStatus['configured'] && $this->smtpStatus['connected'] ? '#27ae60' : '#f39c12';
        $statusText = $this->smtpStatus['configured'] && $this->smtpStatus['connected'] 
            ? '✅ Service Active & Ready' 
            : '⚠️ Service Active (Limited Functionality)';
        
        $warnings = [];
        if (!$this->smtpStatus['configured']) {
            $warnings[] = '📧 SMTP not configured - contact forms will be received but emails won\'t be sent';
        } elseif (!$this->smtpStatus['connected']) {
            $warnings[] = '📧 SMTP connection failed - ' . ($this->smtpStatus['error'] ?? 'Unknown error');
        }
        
        $warningsHtml = '';
        foreach ($warnings as $warning) {
            $warningsHtml .= "<div style='background: rgba(243, 156, 18, 0.2); border: 1px solid rgba(243, 156, 18, 0.5); padding: 15px; border-radius: 10px; margin: 20px 0; color: #f39c12;'>{$warning}</div>";
        }
        
        header('Content-Type: text/html; charset=utf-8');
        
        echo "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"utf-8\">
    <title>TBGS Email Service - Active</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            max-width: 600px;
            padding: 40px 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .logo { font-size: 48px; margin-bottom: 20px; }
        .title { font-size: 32px; font-weight: 700; margin-bottom: 10px; }
        .subtitle { font-size: 18px; margin-bottom: 30px; opacity: 0.9; }
        .status {
            background: {$statusColor};
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            display: inline-block;
            margin: 20px 0;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 15px;
            margin-top: 30px;
        }
        .feature {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .endpoint {
            background: rgba(52, 73, 94, 0.8);
            padding: 15px;
            border-radius: 10px;
            margin-top: 30px;
            font-family: 'Courier New', monospace;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class=\"container\">
        <div class=\"logo\">🏗️</div>
        <div class=\"title\">TBGS Email Service</div>
        <div class=\"subtitle\">PHP Enhanced Email Processing Service</div>
        
        <div class=\"status\">{$statusText}</div>
        
        <div class=\"features\">
            <div class=\"feature\">
                <div style=\"font-size: 24px; margin-bottom: 8px;\">📧</div>
                <div>Email Processing</div>
            </div>
            <div class=\"feature\">
                <div style=\"font-size: 24px; margin-bottom: 8px;\">📁</div>
                <div>File Upload Support</div>
            </div>
            <div class=\"feature\">
                <div style=\"font-size: 24px; margin-bottom: 8px;\">🛡️</div>
                <div>Security Enhanced</div>
            </div>
            <div class=\"feature\">
                <div style=\"font-size: 24px; margin-bottom: 8px;\">⚡</div>
                <div>High Performance</div>
            </div>
        </div>
        
        <div class=\"endpoint\">
            <div style=\"font-weight: 600; margin-bottom: 10px;\">Available Endpoints:</div>
            <div style=\"color: #3498db; margin: 5px 0;\">GET /api/health - Health Check</div>
            <div style=\"color: #3498db; margin: 5px 0;\">POST /api/contact - Contact Form Processing</div>
        </div>
        
        {$warningsHtml}
        
        <div style=\"font-size: 12px; opacity: 0.7; margin-top: 30px;\">
            Service Version: " . self::VERSION . " | " . date('c') . "
        </div>
    </div>
</body>
</html>";
    }
    
    private function healthCheck() 
    {
        $health = [
            'status' => $this->smtpStatus['configured'] && $this->smtpStatus['connected'] ? 'healthy' : 'degraded',
            'service' => 'TBGS Email Service PHP Enhanced',
            'version' => self::VERSION,
            'timestamp' => date('c'),
            'features' => ['php-optimized', 'file-upload', 'image-processing', 'smtp-resilient'],
            'configuration' => [
                'environment' => [
                    'php_version' => PHP_VERSION,
                    'smtp_configured' => $this->smtpStatus['configured']
                ],
                'smtp' => [
                    'configured' => $this->smtpStatus['configured'],
                    'connected' => $this->smtpStatus['connected'],
                    'last_checked' => $this->smtpStatus['last_checked'],
                    'error' => $this->smtpStatus['error']
                ],
                'directories' => [
                    'uploads' => is_writable(__DIR__ . '/uploads'),
                    'templates' => is_readable(__DIR__ . '/templates')
                ]
            ],
            'warnings' => []
        ];
        
        if (!$this->smtpStatus['configured']) {
            $health['warnings'][] = 'SMTP not configured - email functionality disabled';
        } elseif (!$this->smtpStatus['connected']) {
            $health['warnings'][] = 'SMTP configured but connection failed - check credentials';
        }
        
        return $this->jsonResponse($health);
    }
    
    private function handleContactForm() 
    {
        try {
            $this->log('📧 Contact form submission received');
            
            // Get form data (handle both JSON and form-data)
            $input = $this->getInputData();
            
            if (empty($input)) {
                return $this->jsonResponse([
                    'success' => false,
                    'message' => 'No form data received'
                ], 400);
            }
            
            // Validate required fields
            $validation = $this->validateContactData($input);
            if (!$validation['valid']) {
                return $this->jsonResponse([
                    'success' => false,
                    'message' => $validation['error']
                ], 400);
            }
            
            $validatedData = $validation['data'];
            
            // Process file uploads
            $attachments = $this->processFileUploads();
            $this->log("📎 Processed " . count($attachments) . " file attachments");
            
            // Prepare email data
            $emailData = array_merge($validatedData, [
                'submittedAt' => date('c'),
                'filesProcessed' => count($attachments),
                'totalFileSize' => array_sum(array_column($attachments, 'size'))
            ]);
            
            // Send emails if SMTP is configured
            $emailResults = ['admin' => false, 'client' => false];
            
            if ($this->smtpStatus['configured']) {
                try {
                    // Send admin notification email
                    $emailResults['admin'] = $this->sendAdminEmail($emailData, $attachments);
                    
                    // Send client confirmation email
                    $emailResults['client'] = $this->sendClientEmail($emailData);
                    
                    $this->log("✅ Emails sent - Admin: " . ($emailResults['admin'] ? 'Success' : 'Failed') . 
                               ", Client: " . ($emailResults['client'] ? 'Success' : 'Failed'));
                    
                } catch (Exception $e) {
                    $this->log("❌ Email sending failed: " . $e->getMessage());
                }
            }
            
            // Cleanup uploaded files after processing
            $this->cleanupFiles($attachments);
            
            return $this->jsonResponse([
                'success' => true,
                'message' => 'Contactaanvraag succesvol ontvangen',
                'data' => [
                    'submittedAt' => $emailData['submittedAt'],
                    'filesProcessed' => $emailData['filesProcessed'],
                    'emailsSent' => $emailResults,
                    'smtpConfigured' => $this->smtpStatus['configured']
                ]
            ]);
            
        } catch (Exception $e) {
            $this->log("❌ Contact form processing failed: " . $e->getMessage());
            
            return $this->jsonResponse([
                'success' => false,
                'message' => 'Server error tijdens verwerking van aanvraag'
            ], 500);
        }
    }
    
    private function getInputData() 
    {
        $input = [];
        
        // Try JSON input first
        $json = json_decode(file_get_contents('php://input'), true);
        if ($json) {
            $input = $json;
        } else {
            // Fall back to POST data
            $input = $_POST;
        }
        
        // Handle nested emailData from webhook format (backward compatibility)
        if (isset($input['emailData'])) {
            if (is_string($input['emailData'])) {
                $input = json_decode($input['emailData'], true) ?: $input;
            } else {
                $input = $input['emailData'];
            }
        }
        
        return $input;
    }
    
    private function validateContactData(array $input) 
    {
        $required = ['firstName', 'lastName', 'email', 'phone', 'selectedService'];
        
        foreach ($required as $field) {
            if (empty($input[$field])) {
                return [
                    'valid' => false,
                    'error' => "Veld '{$field}' is verplicht"
                ];
            }
        }
        
        // Email validation
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            return [
                'valid' => false,
                'error' => 'Ongeldig e-mailadres'
            ];
        }
        
        // Sanitize and prepare data
        $data = [
            'firstName' => $this->sanitize($input['firstName']),
            'lastName' => $this->sanitize($input['lastName']),
            'email' => filter_var($input['email'], FILTER_SANITIZE_EMAIL),
            'phone' => $this->sanitize($input['phone']),
            'selectedService' => $this->sanitize($input['selectedService']),
            'address' => $this->sanitize($input['address'] ?? 'Niet opgegeven'),
            'projectDescription' => $this->sanitize($input['projectDescription'] ?? 'Geen beschrijving opgegeven'),
            'contactPreference' => $this->sanitize($input['contactPreference'] ?? 'Email')
        ];
        
        return [
            'valid' => true,
            'data' => $data
        ];
    }
    
    private function processFileUploads() 
    {
        $attachments = [];
        
        if (empty($_FILES['files'])) {
            return $attachments;
        }
        
        $files = $_FILES['files'];
        
        // Handle single file or multiple files
        if (!is_array($files['name'])) {
            $files = [
                'name' => [$files['name']],
                'type' => [$files['type']],
                'tmp_name' => [$files['tmp_name']],
                'error' => [$files['error']],
                'size' => [$files['size']]
            ];
        }
        
        for ($i = 0; $i < count($files['name']); $i++) {
            if ($files['error'][$i] !== UPLOAD_ERR_OK) {
                continue;
            }
            
            $file = [
                'name' => $files['name'][$i],
                'type' => $files['type'][$i],
                'tmp_name' => $files['tmp_name'][$i],
                'size' => $files['size'][$i]
            ];
            
            // Validate file
            if (!$this->validateFile($file)) {
                continue;
            }
            
            // Move to uploads directory
            $filename = $this->generateUniqueFilename($file['name']);
            $filepath = __DIR__ . '/uploads/' . $filename;
            
            if (move_uploaded_file($file['tmp_name'], $filepath)) {
                $attachments[] = [
                    'originalName' => $file['name'],
                    'filename' => $filename,
                    'path' => $filepath,
                    'type' => $file['type'],
                    'size' => $file['size']
                ];
            }
        }
        
        return $attachments;
    }
    
    private function validateFile(array $file) 
    {
        // Check file size
        if ($file['size'] > self::MAX_FILE_SIZE) {
            return false;
        }
        
        // Check file type
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);
        
        return in_array($mimeType, self::ALLOWED_TYPES);
    }
    
    private function generateUniqueFilename(string $originalName) 
    {
        $ext = pathinfo($originalName, PATHINFO_EXTENSION);
        return date('Y-m-d_H-i-s') . '_' . uniqid() . '.' . $ext;
    }
    
    private function sendAdminEmail(array $data, array $attachments) 
    {
        $template = $this->loadEmailTemplate('admin', $data);
        
        $mail = $this->createMailer();
        $mail->setFrom($this->config['smtp']['user'], 'TBGS Email Service');
        $mail->addAddress($this->config['contact_receiver'], 'TBGS Team');
        
        $mail->Subject = "Nieuwe klantaanvraag - {$data['selectedService']} - {$data['firstName']} {$data['lastName']}";
        $mail->Body = $template;
        $mail->isHTML(true);
        
        // Add file attachments
        foreach ($attachments as $attachment) {
            $mail->addAttachment($attachment['path'], $attachment['originalName']);
        }
        
        // Add vCard
        $vcard = $this->generateVCard($data);
        $mail->addStringAttachment($vcard, "{$data['firstName']}_{$data['lastName']}.vcf", 'base64', 'text/vcard');
        
        return $mail->send();
    }
    
    private function sendClientEmail(array $data) 
    {
        $template = $this->loadEmailTemplate('client', $data);
        
        $mail = $this->createMailer();
        $mail->setFrom($this->config['smtp']['user'], 'TBGS B.V.');
        $mail->addAddress($data['email'], "{$data['firstName']} {$data['lastName']}");
        
        $mail->Subject = "Bedankt {$data['firstName']}! Je aanvraag is ontvangen - TBGS B.V.";
        $mail->Body = $template;
        $mail->isHTML(true);
        
        return $mail->send();
    }
    
    private function createMailer() 
    {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $this->config['smtp']['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->config['smtp']['user'];
        $mail->Password = $this->config['smtp']['pass'];
        $mail->SMTPSecure = $this->config['smtp']['secure'];
        $mail->Port = $this->config['smtp']['port'];
        $mail->CharSet = 'UTF-8';
        
        return $mail;
    }
    
    private function loadEmailTemplate(string $type, array $data) 
    {
        $templateFile = __DIR__ . "/templates/{$type}.php";
        
        if (file_exists($templateFile)) {
            ob_start();
            include $templateFile;
            return ob_get_clean();
        }
        
        // Fallback to inline template
        return $this->getInlineTemplate($type, $data);
    }
    
    private function getInlineTemplate(string $type, array $data) 
    {
        if ($type === 'admin') {
            return $this->getAdminTemplate($data);
        } else {
            return $this->getClientTemplate($data);
        }
    }
    
    private function getAdminTemplate(array $data) 
    {
        $filesInfo = '';
        if ($data['filesProcessed'] > 0) {
            $filesInfo = "
            <div style='background: #d5f4e6; padding: 20px; border-radius: 8px; margin: 20px 0;'>
                <h3>📎 Bestandsinformatie</h3>
                <p>✅ {$data['filesProcessed']} bestand(en) verwerkt</p>
                <p>📊 Totale grootte: " . $this->formatBytes($data['totalFileSize']) . "</p>
            </div>";
        }
        
        return "
        <html>
        <head><meta charset='utf-8'><title>Nieuwe klantaanvraag - TBGS</title></head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
                <div style='background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;'>
                    <h1>🏗️ Nieuwe Klantaanvraag</h1>
                    <p>TBGS B.V. - Email Service v" . self::VERSION . "</p>
                </div>
                
                <div style='background: white; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 10px 10px;'>
                    <h2>👤 Klantgegevens</h2>
                    <table style='width: 100%; border-collapse: collapse;'>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Naam:</td><td>{$data['firstName']} {$data['lastName']}</td></tr>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Email:</td><td><a href='mailto:{$data['email']}'>{$data['email']}</a></td></tr>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Telefoon:</td><td><a href='tel:{$data['phone']}'>{$data['phone']}</a></td></tr>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Adres:</td><td>{$data['address']}</td></tr>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Service:</td><td><strong>{$data['selectedService']}</strong></td></tr>
                        <tr><td style='padding: 8px 0; font-weight: bold;'>Contact voorkeur:</td><td>{$data['contactPreference']}</td></tr>
                    </table>
                    
                    <h3>📝 Projectbeschrijving</h3>
                    <div style='background: #f8f9fa; padding: 15px; border-left: 4px solid #3498db;'>
                        {$data['projectDescription']}
                    </div>
                    
                    {$filesInfo}
                    
                    <div style='background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;'>
                        <h3>⚡ Actie Vereist</h3>
                        <ul>
                            <li>📞 Contact opnemen binnen 24 uur</li>
                            <li>📝 Verwerken in CRM</li>
                            <li>📅 Afspraak inplannen</li>
                        </ul>
                    </div>
                    
                    <div style='text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa;'>
                        <p><strong>WhatsApp contact:</strong></p>
                        <a href='https://wa.me/31614595142?text=Nieuwe%20aanvraag%20van%20{$data['firstName']}%20{$data['lastName']}' 
                           style='background: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>
                            📱 WhatsApp Team
                        </a>
                    </div>
                </div>
                
                <div style='text-align: center; margin-top: 20px; color: #666; font-size: 12px;'>
                    TBGS B.V. Email Service Enhanced | Ontvangen op {$data['submittedAt']}
                </div>
            </div>
        </body>
        </html>";
    }
    
    private function getClientTemplate(array $data) 
    {
        $filesInfo = '';
        if ($data['filesProcessed'] > 0) {
            $filesInfo = "
            <div style='background: #d5f4e6; padding: 15px; border-radius: 8px; margin: 20px 0;'>
                <p><strong>📎 Bestanden verwerkt:</strong> {$data['filesProcessed']} bestand(en) succesvol ontvangen</p>
            </div>";
        }
        
        return "
        <html>
        <head><meta charset='utf-8'><title>Bedankt {$data['firstName']}! - TBGS</title></head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
                
                <div style='background: white; padding: 40px; text-align: center; border-radius: 15px; margin-bottom: 20px;'>
                    <div style='font-size: 24px; font-weight: bold; color: #2c3e50; margin-bottom: 10px;'>TBGS B.V.</div>
                    <div style='color: #666; font-size: 14px;'>Totaal Bouw Groep Specialisten</div>
                </div>
                
                <div style='background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 40px; text-align: center; border-radius: 15px; margin-bottom: 20px;'>
                    <div style='font-size: 48px; margin-bottom: 15px;'>🎉</div>
                    <h1 style='color: white; margin: 0 0 10px 0; font-size: 32px;'>Bedankt {$data['firstName']}!</h1>
                    <p style='color: white; margin: 0; font-size: 18px;'>Je aanvraag is succesvol ontvangen</p>
                </div>
                
                <div style='background: white; padding: 40px; border-radius: 15px; margin-bottom: 20px;'>
                    <h2 style='text-align: center; color: #2c3e50;'>Wat gebeurt er nu?</h2>
                    <p style='text-align: center; font-size: 16px; margin-bottom: 30px;'>
                        We hebben je aanvraag voor <strong style='color: #e74c3c;'>{$data['selectedService']}</strong> ontvangen.
                    </p>
                    
                    <div style='margin: 30px 0;'>
                        <h3 style='color: #2c3e50; text-align: center;'>📋 Volgende stappen</h3>
                        <div style='padding: 15px; background: #f8f9fa; border-radius: 10px; margin: 10px 0;'>
                            <div style='font-weight: bold; color: #2c3e50;'>1. Binnen 24 uur</div>
                            <div style='color: #666;'>Een van onze specialisten neemt contact met je op</div>
                        </div>
                        <div style='padding: 15px; background: #f8f9fa; border-radius: 10px; margin: 10px 0;'>
                            <div style='font-weight: bold; color: #2c3e50;'>2. Locatie bezoek</div>
                            <div style='color: #666;'>We plannen een afspraak om ter plaatse te bekijken</div>
                        </div>
                        <div style='padding: 15px; background: #f8f9fa; border-radius: 10px; margin: 10px 0;'>
                            <div style='font-weight: bold; color: #2c3e50;'>3. Offerte opstellen</div>
                            <div style='color: #666;'>Je ontvangt een gedetailleerde prijsopgave</div>
                        </div>
                    </div>
                    
                    {$filesInfo}
                </div>
                
                <div style='background: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 20px;'>
                    <h3 style='color: #2c3e50;'>🚨 Spoedeisend of vragen?</h3>
                    <p style='color: #666; margin-bottom: 20px;'>Neem direct contact op via WhatsApp!</p>
                    <a href='https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20een%20aanvraag%20ingediend%20voor%20{$data['selectedService']}' 
                       target='_blank'
                       style='background: linear-gradient(135deg, #25d366 0%, #20b358 100%); color: white; padding: 15px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block;'>
                        📱 WhatsApp: 06-14595142
                    </a>
                </div>
                
                <div style='background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;'>
                    <h4 style='color: #2c3e50; margin: 0 0 15px 0;'>📋 Samenvatting aanvraag</h4>
                    <table style='width: 100%; border-collapse: collapse;'>
                        <tr><td style='padding: 5px; color: #666;'>Service:</td><td style='padding: 5px; font-weight: bold;'>{$data['selectedService']}</td></tr>
                        <tr><td style='padding: 5px; color: #666;'>Contact voorkeur:</td><td style='padding: 5px; font-weight: bold;'>{$data['contactPreference']}</td></tr>
                        <tr><td style='padding: 5px; color: #666;'>Ingediend op:</td><td style='padding: 5px; font-weight: bold;'>" . date('d-m-Y H:i', strtotime($data['submittedAt'])) . "</td></tr>
                    </table>
                </div>
                
                <div style='text-align: center; margin-top: 20px; color: #999; font-size: 12px;'>
                    <p>TBGS B.V. - Betrouwbare vakmannen voor al uw bouwprojecten</p>
                    <p>Deze email is automatisch gegenereerd. Reageer niet op deze email.</p>
                </div>
            </div>
        </body>
        </html>";
    }
    
    private function generateVCard(array $data) 
    {
        $vcard = "BEGIN:VCARD\r\n";
        $vcard .= "VERSION:3.0\r\n";
        $vcard .= "FN:{$data['firstName']} {$data['lastName']}\r\n";
        $vcard .= "N:{$data['lastName']};{$data['firstName']};;;\r\n";
        $vcard .= "EMAIL:{$data['email']}\r\n";
        $vcard .= "TEL:{$data['phone']}\r\n";
        if (!empty($data['address']) && $data['address'] !== 'Niet opgegeven') {
            $vcard .= "ADR:;;{$data['address']};;;;\r\n";
        }
        $vcard .= "NOTE:TBGS klant - Service: {$data['selectedService']}\r\n";
        $vcard .= "END:VCARD\r\n";
        
        return $vcard;
    }
    
    private function cleanupFiles(array $attachments) 
    {
        foreach ($attachments as $attachment) {
            if (file_exists($attachment['path'])) {
                unlink($attachment['path']);
            }
        }
    }
    
    private function formatBytes(int $bytes) 
    {
        if ($bytes === 0) return '0 Bytes';
        $k = 1024;
        $sizes = ['Bytes', 'KB', 'MB', 'GB'];
        $i = floor(log($bytes) / log($k));
        return round($bytes / pow($k, $i), 2) . ' ' . $sizes[$i];
    }
    
    private function sanitize(string $input) 
    {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
    
    private function jsonResponse(array $data, int $status = 200) 
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    private function log(string $message) 
    {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[{$timestamp}] {$message}" . PHP_EOL;
        
        // Log to error_log in production
        if ($this->config['environment'] === 'production') {
            error_log($message);
        } else {
            // Output to stdout/stderr in development
            file_put_contents('php://stderr', $logMessage);
        }
    }
}

// Initialize and run the service
try {
    $service = new TBGSEmailService();
    $service->handleRequest();
    
} catch (Exception $e) {
    // Fallback error handling
    http_response_code(500);
    header('Content-Type: application/json');
    
    echo json_encode([
        'success' => false,
        'message' => 'Service temporarily unavailable',
        'error' => $e->getMessage()
    ]);
}
?>