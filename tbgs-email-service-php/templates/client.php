<?php
// Client email template for TBGS contact form confirmations
// This file is included by the main service and has access to $data array

$filesInfo = '';
if (isset($data['filesProcessed']) && $data['filesProcessed'] > 0) {
    $filesInfo = "
    <div style='margin-top: 30px;'>
        <div style='background: #d5f4e6; padding: 20px; border-radius: 10px; border: 1px solid #a3e3c4;'>
            <h4 style='margin: 0 0 10px 0; color: #2c3e50; font-size: 16px;'>
                📎 Bestandsverwerking voltooid
            </h4>
            <p style='margin: 0; color: #555; line-height: 1.5;'>
                ✅ {$data['filesProcessed']} bestand(en) succesvol verwerkt en ontvangen<br>
                📧 Alle bestanden zijn doorgestuurd naar ons team
            </p>
        </div>
    </div>";
}

// Use placeholder logo for better email deliverability
$tbgsLogoBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTUwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMmMzZTUwIi8+Cjx0ZXh0IHg9Ijc1IiB5PSIzNSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEJHUyBCLlYuPC90ZXh0Pgo8dGV4dCB4PSI3NSIgeT0iNTUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VG90YWFsIEJvdXcgR3JvZXAgU3BlY2lhbGlzdGVuPC90ZXh0Pgo8L3N2Zz4K";
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bedankt <?= htmlspecialchars($data['firstName'] ?? '') ?>! - TBGS B.V.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
    <div style="max-width: 650px; margin: 0 auto; padding: 20px;">
        
        <!-- TBGS Logo Header -->
        <div style="text-align: center; margin-bottom: 30px; padding: 30px; background: white; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
            <img src="<?= $tbgsLogoBase64 ?>" alt="TBGS B.V. Logo" style="max-width: 150px; height: auto; margin-bottom: 15px; border-radius: 8px;" />
            <div style="font-size: 20px; font-weight: 700; color: #2c3e50; margin-bottom: 5px;">
                TBGS B.V.
            </div>
            <div style="font-size: 14px; color: #666; font-weight: 500;">
                Totaal Bouw Groep Specialisten
            </div>
            <div style="font-size: 12px; color: #999; margin-top: 8px; font-style: italic;">
                Betrouwbare vakmannen voor al uw bouwprojecten
            </div>
        </div>

        <!-- Success Message -->
        <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 40px; text-align: center; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 8px 25px rgba(39,174,96,0.3);">
            <div style="font-size: 48px; margin-bottom: 15px;">🎉</div>
            <h1 style="color: white; margin: 0 0 10px 0; font-size: 32px; font-weight: 700;">
                Bedankt <?= htmlspecialchars($data['firstName'] ?? '') ?>!
            </h1>
            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 18px; font-weight: 500;">
                Je aanvraag is succesvol ontvangen
            </p>
        </div>
        
        <!-- Main Message -->
        <div style="background: white; padding: 40px; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
                    Wat gebeurt er nu?
                </h2>
                <p style="font-size: 18px; line-height: 1.8; margin: 0; color: #555;">
                    We hebben je aanvraag voor <strong style="color: #e74c3c; background: #fff5f5; padding: 4px 8px; border-radius: 6px;"><?= htmlspecialchars($data['selectedService'] ?? '') ?></strong> ontvangen en in behandeling genomen.
                </p>
            </div>

            <!-- Process Timeline -->
            <div style="margin: 30px 0;">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; text-align: center;">
                    📋 Volgende stappen
                </h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #3498db;">
                        <div style="background: #3498db; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px; flex-shrink: 0;">1</div>
                        <div>
                            <div style="font-weight: 600; color: #2c3e50; margin-bottom: 2px;">Binnen 24 uur</div>
                            <div style="color: #555; font-size: 14px;">Een van onze specialisten neemt contact met je op</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #f39c12;">
                        <div style="background: #f39c12; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px; flex-shrink: 0;">2</div>
                        <div>
                            <div style="font-weight: 600; color: #2c3e50; margin-bottom: 2px;">Locatie bezoek</div>
                            <div style="color: #555; font-size: 14px;">We plannen een afspraak in om ter plaatse te bekijken</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #27ae60;">
                        <div style="background: #27ae60; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px; flex-shrink: 0;">3</div>
                        <div>
                            <div style="font-weight: 600; color: #2c3e50; margin-bottom: 2px;">Offerte opstellen</div>
                            <div style="color: #555; font-size: 14px;">Je ontvangt een gedetailleerde prijsopgave</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <?= $filesInfo ?>
        </div>

        <!-- Emergency Contact -->
        <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px; border: 2px solid #e9ecef; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <h3 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">
                🚨 Spoedeisend of vragen?
            </h3>
            <p style="margin: 0 0 20px 0; color: #666; font-size: 16px;">
                Heb je direct hulp nodig? Neem via WhatsApp contact met ons op!
            </p>
            <div style="display: inline-block;">
                <a href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20zojuist%20een%20aanvraag%20ingediend%20voor%20<?= urlencode($data['selectedService'] ?? '') ?>%20en%20ik%20heb%20een%20vraag..." 
                   target="_blank" rel="noopener noreferrer" 
                   style="background: linear-gradient(135deg, #25d366 0%, #20b358 100%); color: white; padding: 15px 25px; text-decoration: none; border-radius: 30px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
                    <span style="font-size: 18px; margin-right: 8px;">📱</span>
                    WhatsApp: 06-14595142
                </a>
            </div>
            <p style="margin: 20px 0 0 0; color: #999; font-size: 12px;">
                Klik op de knop om direct een bericht te sturen
            </p>
        </div>
        
        <!-- Summary Information -->
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e9ecef;">
            <h4 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px; text-align: center;">
                📋 Samenvatting van je aanvraag
            </h4>
            <table style="width: 100%; border-collapse: collapse; margin: 0;">
                <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">Service:</td>
                    <td style="padding: 8px 0; font-weight: 600; color: #2c3e50;"><?= htmlspecialchars($data['selectedService'] ?? '') ?></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">Contactvoorkeur:</td>
                    <td style="padding: 8px 0; font-weight: 600; color: #2c3e50;"><?= htmlspecialchars($data['contactPreference'] ?? '') ?></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">Ingediend op:</td>
                    <td style="padding: 8px 0; font-weight: 600; color: #2c3e50;"><?= date('d-m-Y H:i', strtotime($data['submittedAt'] ?? 'now')) ?></td>
                </tr>
            </table>
        </div>

        <!-- Social Media & Additional Info -->
        <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px;">
                🌐 Volg ons online
            </h4>
            <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">
                Blijf op de hoogte van onze projecten en tips
            </p>
            <div style="margin-bottom: 15px;">
                <a href="https://tbgs.nl" target="_blank" rel="noopener noreferrer" 
                   style="background: #2c3e50; color: white; padding: 8px 15px; text-decoration: none; border-radius: 20px; margin: 5px; display: inline-block; font-size: 14px; font-weight: 500;">
                    🏠 tbgs.nl
                </a>
            </div>
            <p style="margin: 0; color: #999; font-size: 12px; line-height: 1.4;">
                <strong>TBGS B.V.</strong> - Gespecialiseerd in dakwerk, bouw, onderhoud en schoorsteenservice<br>
                Ervaring, kwaliteit en betrouwbaarheid sinds jaar en dag
            </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; color: #999; font-size: 12px; line-height: 1.5;">
            <p style="margin: 0 0 10px 0;">
                Deze email is automatisch gegenereerd door ons systeem.<br>
                Reageer niet op deze email - gebruik de bovenstaande contactmogelijkheden.
            </p>
            <p style="margin: 0; opacity: 0.7;">
                TBGS B.V. Email Service PHP Enhanced v3.0 | <?= date('Y') ?>
            </p>
        </div>
        
    </div>
</body>
</html>