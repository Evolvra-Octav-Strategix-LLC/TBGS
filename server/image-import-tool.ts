import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

interface ImageImportConfig {
  sourceDir: string;
  targetNextcloudDir: string;
  organizationPlan: {
    [category: string]: {
      pattern: RegExp;
      targetPath: string;
      newName?: string;
    }[];
  };
}

export class ImageImportTool {
  private config: ImageImportConfig;

  constructor() {
    this.config = {
      sourceDir: './attached_assets',
      targetNextcloudDir: './nextcloud-import', // Temp directory for organization
      organizationPlan: {
        // Logo's en branding
        algemeen: [
          {
            pattern: /TBGS.*545x642.*1754935848756\.png/i,
            targetPath: 'algemeen/logo-tbgs-main.png'
          },
          {
            pattern: /tbgs-logo-\d+\.webp/i,
            targetPath: 'algemeen/logo-tbgs-small.webp'
          }
        ],
        
        // Specialist logo's
        specialists: [
          {
            pattern: /TDS.*545x642.*1755096847747\.png/i,
            targetPath: 'algemeen/logo-tds.png'
          },
          {
            pattern: /TSS.*545x642.*1755096878001\.png/i,
            targetPath: 'algemeen/logo-tss.png'
          },
          {
            pattern: /TOS.*545x642.*1755096847747\.png/i,
            targetPath: 'algemeen/logo-tos.png'
          },
          {
            pattern: /TBS.*545x642.*1755096847747\.png/i,
            targetPath: 'algemeen/logo-tbs.png'
          }
        ],

        // Partner logo's
        partners: [
          {
            pattern: /koramic-logo/i,
            targetPath: 'partners/koramic-logo.png'
          },
          {
            pattern: /icopal-logo/i,
            targetPath: 'partners/icopal-logo.png'
          },
          {
            pattern: /BMI_MONIER/i,
            targetPath: 'partners/bmi-monier-logo.png'
          },
          {
            pattern: /logo-defrancq/i,
            targetPath: 'partners/defrancq-logo.png'
          },
          {
            pattern: /REC_insulation/i,
            targetPath: 'partners/rec-insulation-logo.jpg'
          }
        ],

        // Werk foto's en projecten
        projecten: [
          {
            pattern: /IMG_\d+/i,
            targetPath: 'projecten/project-foto.png'
          },
          {
            pattern: /IMAGE.*2025.*\.jpg/i,
            targetPath: 'projecten/recent-project.jpg'
          }
        ]
      }
    };
  }

  async analyzeExistingImages(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.config.sourceDir);
      const imageFiles = files.filter(file => 
        /\.(png|jpg|jpeg|webp|svg)$/i.test(file)
      );

      console.log(`📊 Found ${imageFiles.length} image files in attached_assets:`);
      
      // Group by category
      const categorized: { [key: string]: string[] } = {
        logos: [],
        partners: [],
        projects: [],
        other: []
      };

      imageFiles.forEach(file => {
        if (/tbgs|tds|tss|tos|tbs/i.test(file)) {
          categorized.logos.push(file);
        } else if (/logo|koramic|icopal|bmi|defrancq|rec_/i.test(file)) {
          categorized.partners.push(file);
        } else if (/img_|image.*202|project/i.test(file)) {
          categorized.projects.push(file);
        } else {
          categorized.other.push(file);
        }
      });

      // Display categorized results
      Object.entries(categorized).forEach(([category, files]) => {
        if (files.length > 0) {
          console.log(`\n📁 ${category.toUpperCase()}:`);
          files.forEach(file => console.log(`  - ${file}`));
        }
      });

      return imageFiles;
    } catch (error) {
      console.error('❌ Error analyzing images:', error);
      return [];
    }
  }

  async createOrganizedStructure(): Promise<string> {
    try {
      // Create temp directory for organizing
      const tempDir = './nextcloud-import-structure';
      await fs.mkdir(tempDir, { recursive: true });

      // Create subdirectories
      const dirs = [
        'algemeen',
        'dak',
        'schoorsteen', 
        'onderhoud',
        'bouw',
        'partners',
        'projecten',
        'kennisbank',
        'locaties',
        'reviews'
      ];

      for (const dir of dirs) {
        await fs.mkdir(path.join(tempDir, dir), { recursive: true });
      }

      console.log('📁 Created organized directory structure in:', tempDir);
      return tempDir;
    } catch (error) {
      console.error('❌ Error creating structure:', error);
      throw error;
    }
  }

  async generateImportInstructions(): Promise<string> {
    const imageFiles = await this.analyzeExistingImages();
    
    const instructions = `
# 📂 NEXTCLOUD IMPORT INSTRUCTIES

## 🎯 Stap 1: Maak deze mappenstructuur in je Nextcloud "Website Images" folder:

\`\`\`
Website Images/
├── 📁 algemeen/          (logos, headers, algemene afbeeldingen)
├── 📁 dak/              (TDS - daklekkage, renovatie, isolatie)
├── 📁 schoorsteen/      (TSS - vegen, reparatie, inspectie)
├── 📁 onderhoud/        (TOS - schilderen, reiniging, preventief)
├── 📁 bouw/             (TBS - metselwerk, timmerwerk, nieuwbouw)
├── 📁 partners/         (partner logo's)
├── 📁 projecten/        (voor/na foto's, werkplaatsen)
├── 📁 kennisbank/       (artikel afbeeldingen)
├── 📁 locaties/         (stad/regio specifieke foto's)
└── 📁 reviews/          (klant testimonials)
\`\`\`

## 🔄 Stap 2: Kopieer deze bestaande afbeeldingen:

### 📋 LOGO'S & BRANDING → algemeen/
- \`TBGS 545x642_1754935848756.png\` → \`logo-tbgs-main.png\`
- \`TDS 545x642 (1)_1755096847747.png\` → \`logo-tds.png\`
- \`TSS 545x642 (1)_1755096878001.png\` → \`logo-tss.png\`
- \`TOS 545x642 (1)_1755096847747.png\` → \`logo-tos.png\`
- \`TBS 545x642 (1)_1755096847747.png\` → \`logo-tbs.png\`

### 🤝 PARTNER LOGO'S → partners/
- \`koramic-logo-vector-211622967_1758228709494.png\` → \`koramic-logo.png\`
- \`icopal-logo-auto_width_440-3706882960_1758228709473.png\` → \`icopal-logo.png\`
- \`BMI_MONIER_RGB_1755712167209.png\` → \`bmi-monier-logo.png\`
- \`logo-defrancq_1755712167210.png\` → \`defrancq-logo.png\`
- \`REC_insulation_no_tagline_v1_0_1755712156699.jpg\` → \`rec-insulation-logo.jpg\`

### 📸 PROJECT FOTO'S → projecten/
${imageFiles.filter(f => /img_|image.*202/i.test(f)).map(f => `- \`${f}\` → hernoem naar beschrijvende naam`).join('\n')}

## ⚡ Stap 3: Automatische Sync
Na upload worden afbeeldingen automatisch:
- ✅ Gesynchroniseerd binnen 1 minuut
- 🔄 Geoptimaliseerd (WebP/AVIF)
- 📱 Responsive gemaakt
- 💾 Gecached voor snelle laadtijden

## 🎨 Stap 4: Gebruik in Code
\`\`\`jsx
// Hoofdlogo
<NextcloudImage filename="algemeen/logo-tbgs-main.png" alt="TBGS Logo" />

// Service afbeelding  
<NextcloudImage filename="dak/daklekkage-reparatie.jpg" alt="Daklekkage reparatie" />

// Partner logo
<NextcloudImage filename="partners/koramic-logo.png" alt="Koramic" />
\`\`\`

## 📝 Naamgevingsregels:
- **Geen spaties** → gebruik \`-\` (daklekkage-reparatie.jpg)
- **Kleine letters** → makkelijker in code
- **Beschrijvend** → hero-dak-hoofdpagina.jpg
- **Consistent formaat** → 1920x1080 voor hero's, 800x600 voor cards

🚀 **Klaar om te starten? Upload de eerste afbeeldingen naar je Nextcloud en zie ze automatisch verschijnen op je website!**
`;

    return instructions;
  }

  async createPlaceholderReplacementMap(): Promise<{ [key: string]: string }> {
    return {
      // Unsplash placeholders → Nextcloud paths
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64': 'dak/hero-daklekkage.jpg',
      'https://images.unsplash.com/photo-1570129477492-0a1755942756': 'onderhoud/hero-onderhoud.jpg',
      'https://images.unsplash.com/photo-1578662996442-d81bb19240f5': 'bouw/hero-metselwerk.jpg',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa': 'onderhoud/dakkapel-reiniging.jpg',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d': 'algemeen/gevelwerk.jpg',
      'https://images.unsplash.com/photo-1517581177682-0a085bb7d9404': 'dak/dakpannen-keuze.jpg',
      'https://images.unsplash.com/photo-1544237151-6e4b996de81b': 'bouw/patio-terras.jpg',
      'https://images.unsplash.com/photo-1518709268805-37526070297c': 'kennisbank/smart-building.jpg',
      'https://images.unsplash.com/photo-1503387762-654f924680e4': 'bouw/nieuwbouw.jpg',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5': 'bouw/verbouwing.jpg',
      
      // Local placeholders → Nextcloud paths  
      '/images/dakisolatie-technieken-banner.jpg': 'kennisbank/dakisolatie-banner.jpg',
      '/images/sustainability-certifications-banner.jpg': 'kennisbank/duurzaamheid-banner.jpg',
      '/images/smart-building-banner.jpg': 'kennisbank/smart-building-banner.jpg',
      '/images/zonnepanelen-expert-guide.jpg': 'kennisbank/zonnepanelen-gids.jpg',
      
      // Static img references → Nextcloud paths
      '/img/TBGS%20545x642_1754935848756.png': 'algemeen/logo-tbgs-main.png',
      '/img/TDS%20545x642%20(1)_1755096847747.png': 'algemeen/logo-tds.png',
      '/img/TSS%20545x642%20(1)_1755096878001.png': 'algemeen/logo-tss.png',
      '/img/TOS%20545x642%20(1)_1755096847747.png': 'algemeen/logo-tos.png',
      '/img/TBS%20545x642%20(1)_1755096847747.png': 'algemeen/logo-tbs.png'
    };
  }
}

// Export singleton instance
export const imageImportTool = new ImageImportTool();