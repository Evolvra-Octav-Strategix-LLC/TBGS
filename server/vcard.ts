// vCard generation utility voor TBGS business cards
import crypto from "crypto";
import fs from "fs";
import path from "path";

/** vCard veld-escaping */
function esc(s: string = "") {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

/** vCard line folding (compat met Outlook/Gmail) */
function fold(line: string) {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 73) return line;
  let out = "";
  let i = 0;
  while (i < bytes.length) {
    const take = Math.min(73, bytes.length - i);
    out += Buffer.from(bytes.slice(i, i + take)).toString("utf8");
    i += take;
    if (i < bytes.length) out += "\r\n ";
  }
  return out;
}

export type VCardInput = {
  givenName?: string;
  familyName?: string;
  fullName?: string;
  org?: string;
  title?: string;
  email?: string;
  phone?: string;   // vast werknummer
  mobile?: string;  // mobiel
  street?: string;
  city?: string;
  region?: string;     // provincie/regio
  postcode?: string;
  country?: string;
  url?: string;
  notes?: string;
  logoPath?: string;   // Path to TBGS logo for photo embedding
};

/** Generate base64 encoded photo from TBGS logo */
function getLogoBase64(): string | null {
  try {
    // Use the verified TBGS logo files
    const tbgsPaths = [
      path.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754928031668.png'),
      path.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754935666047.png'),
      path.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754935848756.png'),
    ];
    
    for (const logoPath of tbgsPaths) {
      if (fs.existsSync(logoPath)) {
        const logoBuffer = fs.readFileSync(logoPath);
        console.log(`✓ TBGS logo loaded for vCard: ${path.basename(logoPath)}`);
        return logoBuffer.toString('base64');
      }
    }
    
    console.warn('vCard: TBGS logo bestanden niet gevonden voor profile photo');
    return null;
  } catch (error) {
    console.error('vCard: Error loading TBGS logo:', error);
    return null;
  }
}

/** Genereer high-end vCard 3.0 als Buffer met TBGS branding */
export function createVCard(c: VCardInput) {
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d+Z$/, "Z"); // 20250822T120000Z
  const uid =
    (crypto as any).randomUUID?.() ??
    crypto.randomBytes(16).toString("hex");

  const fullName =
    c.fullName ||
    [c.givenName, c.familyName].filter(Boolean).join(" ").trim() ||
    c.org ||
    "TBGS Contact";

  // TBGS branding defaults
  const n = `${esc(c.familyName || "")};${esc(c.givenName || "")};;;`;
  const fn = esc(fullName);
  const org = esc(c.org || "TBGS B.V. - Totaal Bouw Groep Specialisten");
  const title = esc(c.title || "Specialist");
  const email = esc(c.email || "");
  const phone = esc(c.phone || "+31 40 123 4567"); // TBGS hoofdnummer
  const mobile = esc(c.mobile || "");
  const url = esc(c.url || "https://www.tbgs.nl");
  const notes = esc(c.notes || "TBGS - Uw specialist voor dak, schoorsteen, onderhoud en bouw werkzaamheden in Nederland en België.");

  // Nederlandse addressering
  const street = esc(c.street || "");
  const city = esc(c.city || "");
  const region = esc(c.region || "Noord-Brabant");
  const postcode = esc(c.postcode || "");
  const country = esc(c.country || "Nederland");
  const adr = `;;${street};${city};${region};${postcode};${country}`;

  // Create Google Maps URL for address
  const addressForMaps = [street, city, region, postcode, country].filter(Boolean).join(', ');
  const mapsUrl = addressForMaps ? `https://maps.google.com/maps?q=${encodeURIComponent(addressForMaps)}` : "";

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    fold(`N:${n}`),
    fold(`FN:${fn}`),
    fold(`ORG:${org}`),
    title ? fold(`TITLE:${title}`) : "",
    email ? fold(`EMAIL;TYPE=INTERNET,PREF:${email}`) : "",
    phone ? fold(`TEL;TYPE=WORK,VOICE:${phone}`) : "",
    mobile ? fold(`TEL;TYPE=CELL,VOICE:${mobile}`) : "",
    (street || city || region || postcode || country)
      ? fold(`ADR;TYPE=WORK:${adr}`)
      : "",
    fold(`URL:${url}`),
    mapsUrl ? fold(`URL;TYPE=MAPS:${mapsUrl}`) : "", // Google Maps link
    notes ? fold(`NOTE:${notes}`) : "",
    `REV:${now}`,
    `UID:${uid}`,
  ];

  // Add TBGS logo as profile photo
  const logoBase64 = getLogoBase64();
  if (logoBase64) {
    // Split base64 data for proper folding
    const photoLine = `PHOTO;ENCODING=BASE64;TYPE=PNG:${logoBase64}`;
    lines.splice(-2, 0, fold(photoLine)); // Insert before REV and UID
  }

  lines.push("END:VCARD");

  const vcf = lines.filter(Boolean).join("\r\n") + "\r\n"; // CRLF verplicht
  return Buffer.from(vcf, "utf8");
}

/** Create TBGS vCard from form data */
export function createTBGSVCard(formData: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  projectDescription?: string;
  selectedService?: string;
}) {
  // Parse address for better vCard structure
  let street = "";
  let city = "";
  let postcode = "";
  let houseNumber = "";
  
  if (formData.address) {
    const addressParts = formData.address.split(',').map(p => p.trim());
    if (addressParts.length >= 2) {
      // Extract street and house number from first part
      const streetPart = addressParts[0];
      const streetMatch = streetPart.match(/^(.+?)\s+(\d+.*?)$/);
      if (streetMatch) {
        street = streetMatch[1];
        houseNumber = streetMatch[2];
      } else {
        street = streetPart;
      }
      
      const lastPart = addressParts[addressParts.length - 1];
      const postcodeMatch = lastPart.match(/(\d{4}\s*[A-Za-z]{2})/);
      if (postcodeMatch) {
        postcode = postcodeMatch[1];
        city = lastPart.replace(postcodeMatch[0], '').trim();
      } else {
        city = lastPart;
      }
    } else {
      // Single address string - try to parse
      const singleMatch = formData.address.match(/^(.+?)\s+(\d+.*?),?\s*(\d{4}\s*[A-Za-z]{2})?\s*(.*)$/);
      if (singleMatch) {
        street = singleMatch[1];
        houseNumber = singleMatch[2];
        if (singleMatch[3]) postcode = singleMatch[3];
        if (singleMatch[4]) city = singleMatch[4];
      } else {
        street = formData.address;
      }
    }
  }

  // Create comprehensive notes with all client info
  let notes = "TBGS B.V. - Uw betrouwbare partner voor alle bouw- en onderhoudswerkzaamheden.\n\n";
  
  if (formData.selectedService) {
    notes += `Service: ${formData.selectedService}\n`;
  }
  
  if (formData.projectDescription) {
    notes += `Beschrijving: ${formData.projectDescription}\n`;
  }
  
  notes += `\nKlant aangemaakt via TBGS website`;

  // Create comprehensive display name for easy WhatsApp recognition
  const addressParts = [street, houseNumber, postcode, city].filter(Boolean);
  const fullDisplayName = [formData.firstName, formData.lastName, ...addressParts].filter(Boolean).join(' ');

  return createVCard({
    givenName: fullDisplayName, // Full info in firstname for WhatsApp
    familyName: "", // Keep lastname empty to avoid duplication
    fullName: fullDisplayName,
    email: formData.email,
    mobile: formData.phone ? formData.phone : undefined, // Only add if client provided
    phone: undefined, // No work number unless provided
    street: `${street} ${houseNumber}`.trim(),
    city,
    postcode,
    country: "Nederland",
    region: "Noord-Brabant",
    org: "TBGS B.V.",
    title: `${street} ${houseNumber} ${postcode} ${city}`.trim(), // Address in title for quick reference
    url: "https://www.tbgs.nl",
    notes
  });
}