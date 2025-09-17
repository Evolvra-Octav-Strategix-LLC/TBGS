<?php
// Admin email template for TBGS contact form notifications
// This file is included by the main service and has access to $data array

function formatFileSize($bytes) {
    if ($bytes === 0) return '0 Bytes';
    $k = 1024;
    $sizes = ['Bytes', 'KB', 'MB', 'GB'];
    $i = floor(log($bytes) / log($k));
    return round($bytes / pow($k, $i), 2) . ' ' . $sizes[$i];
}

$filesInfo = '';
if (isset($data['filesProcessed']) && $data['filesProcessed'] > 0) {
    $filesInfo = "
    <div style='margin-bottom: 30px;'>
        <h3 style='color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #ecf0f1; padding-bottom: 8px;'>
            📎 Bestandsverwerking
        </h3>
        <div style='background: #d5f4e6; padding: 20px; border-radius: 8px; border-left: 4px solid #27ae60;'>
            <p style='margin: 0 0 10px 0; font-weight: 600; color: #2c3e50;'>
                ✅ {$data['filesProcessed']} bestand(en) succesvol verwerkt
            </p>
            <p style='margin: 0; color: #555; font-size: 14px;'>
                📊 Totale grootte: " . formatFileSize($data['totalFileSize'] ?? 0) . "<br>
                📧 Bestanden zijn als bijlage toegevoegd aan deze email
            </p>
        </div>
    </div>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nieuwe klantaanvraag - TBGS B.V.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f5f5f5;">
    <div style="max-width: 700px; margin: 0 auto; padding: 20px;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">
                🏗️ Nieuwe Klantaanvraag
            </h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                TBGS B.V. - Email Service PHP v3.0
            </p>
        </div>
        
        <!-- Main Content -->
        <div style="background: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Customer Information -->
            <div style="margin-bottom: 30px;">
                <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
                    👤 Klantgegevens
                </h2>
                
                <table style="width: 100%; border-collapse: collapse; margin: 0;">
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; width: 140px; color: #555;">Naam:</td>
                        <td style="padding: 12px 0; font-size: 16px;"><?= htmlspecialchars($data['firstName'] ?? '') ?> <?= htmlspecialchars($data['lastName'] ?? '') ?></td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">Email:</td>
                        <td style="padding: 12px 0;">
                            <a href="mailto:<?= htmlspecialchars($data['email'] ?? '') ?>" style="color: #3498db; text-decoration: none; font-weight: 500;"><?= htmlspecialchars($data['email'] ?? '') ?></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">Telefoon:</td>
                        <td style="padding: 12px 0;">
                            <a href="tel:<?= htmlspecialchars($data['phone'] ?? '') ?>" style="color: #27ae60; text-decoration: none; font-weight: 500;"><?= htmlspecialchars($data['phone'] ?? '') ?></a>
                            <span style="margin-left: 10px;">
                                <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $data['phone'] ?? '') ?>?text=Hallo%20<?= urlencode($data['firstName'] ?? '') ?>%2C%20bedankt%20voor%20je%20aanvraag%20betreffende%20<?= urlencode($data['selectedService'] ?? '') ?>" 
                                   target="_blank" rel="noopener noreferrer" 
                                   style="background: #25d366; color: white; padding: 4px 8px; border-radius: 12px; text-decoration: none; font-size: 12px;">
                                    📱 WhatsApp
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">Adres:</td>
                        <td style="padding: 12px 0;">
                            <a href="https://www.google.com/maps/search/<?= urlencode($data['address'] ?? '') ?>" target="_blank" rel="noopener noreferrer" style="color: #1e88e5; text-decoration: none;"><?= htmlspecialchars($data['address'] ?? '') ?></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">Service:</td>
                        <td style="padding: 12px 0;">
                            <span style="background: #e74c3c; color: white; padding: 4px 12px; border-radius: 15px; font-weight: 500; font-size: 14px;">
                                <?= htmlspecialchars($data['selectedService'] ?? '') ?>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">Contact voorkeur:</td>
                        <td style="padding: 12px 0;"><?= htmlspecialchars($data['contactPreference'] ?? '') ?></td>
                    </tr>
                </table>
            </div>
            
            <!-- Project Description -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #ecf0f1; padding-bottom: 8px;">
                    📝 Projectbeschrijving
                </h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db; line-height: 1.6;">
                    <?= nl2br(htmlspecialchars($data['projectDescription'] ?? '')) ?>
                </div>
            </div>
            
            <?= $filesInfo ?>
            
            <!-- Submission Details -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #ecf0f1; padding-bottom: 8px;">
                    ℹ️ Aanvraagdetails
                </h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
                    <table style="width: 100%; border-collapse: collapse; margin: 0;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #555;">Ontvangen op:</td>
                            <td style="padding: 8px 0;"><?= date('l d F Y', strtotime($data['submittedAt'] ?? 'now')) ?></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #555;">Tijd:</td>
                            <td style="padding: 8px 0;"><?= date('H:i', strtotime($data['submittedAt'] ?? 'now')) ?></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #555;">Service versie:</td>
                            <td style="padding: 8px 0;">
                                <span style="background: #6c757d; color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">
                                    PHP v3.0
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <!-- Action Items -->
            <div style="background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); color: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px;">
                    ⚡ Actie Vereist
                </h3>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>📞 Binnen 24 uur contact opnemen met klant</li>
                    <li>📝 Aanvraag verwerken in CRM systeem</li>
                    <li>📅 Afspraak inplannen voor locatie bezoek</li>
                    <li>💰 Offerte voorbereiden voor <?= htmlspecialchars($data['selectedService'] ?? '') ?></li>
                </ul>
            </div>
            
            <!-- Quick Actions -->
            <div style="text-align: center; margin-bottom: 20px;">
                <a href="https://wa.me/31614595142?text=Nieuwe%20aanvraag%20ontvangen%20van%20<?= urlencode($data['firstName'] ?? '') ?>%20<?= urlencode($data['lastName'] ?? '') ?>%20voor%20<?= urlencode($data['selectedService'] ?? '') ?>" 
                   target="_blank" rel="noopener noreferrer"
                   style="background: #25d366; color: white; padding: 15px 25px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; margin: 10px;">
                    📱 Directe WhatsApp
                </a>
                <a href="mailto:<?= htmlspecialchars($data['email'] ?? '') ?>?subject=Re: Aanvraag <?= urlencode($data['selectedService'] ?? '') ?>" 
                   style="background: #3498db; color: white; padding: 15px 25px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; margin: 10px;">
                    📧 Email Klant
                </a>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px;">
            <p style="margin: 0 0 10px 0;">
                <strong>TBGS B.V. Email Service Enhanced</strong><br>
                Automatisch gegenereerd door het PHP email systeem
            </p>
            <p style="margin: 0; opacity: 0.8;">
                Voor technische problemen: <a href="mailto:tech@tbgs.nl" style="color: #3498db;">tech@tbgs.nl</a>
            </p>
        </div>
        
    </div>
</body>
</html>