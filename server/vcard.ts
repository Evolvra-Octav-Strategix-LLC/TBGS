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
  const phone = esc(c.phone || ""); // Only client provided phone
  const mobile = esc(c.mobile || "");
  const url = esc(c.url || ""); // No default URL
  const notes = esc(c.notes || ""); // Only custom notes

  // Use actual address components without defaults
  const street = esc(c.street || "");
  const city = esc(c.city || "");
  const region = esc(c.region || "");
  const postcode = esc(c.postcode || "");
  const country = esc(c.country || "");
  const adr = `;;${street};${city};${region};${postcode};${country}`;

  // Create Google Maps URL for address using actual components
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
    url ? fold(`URL:${url}`) : "",
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

/** Create TBGS vCard from form data with Google Places integration */
export function createTBGSVCard(formData: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  projectDescription?: string;
  selectedService?: string;
  // Google Places data
  street?: string;
  houseNumber?: string;
  city?: string;
  postcode?: string;
  country?: string;
}) {
  // Use individual address components if provided (from Google Places API), otherwise parse address string
  let street = formData.street || "";
  let city = formData.city || "";
  let postcode = formData.postcode || "";
  let houseNumber = formData.houseNumber || "";
  let country = formData.country || "Nederland";
  
  // Fallback: parse address string if no individual components  
  if (!street && !city && !postcode && formData.address) {
    const fullAddress = formData.address.trim();
    
    // Try Dutch address pattern first: "Hurkssestraat 64, 5652 AH Eindhoven"
    const dutchMatch = fullAddress.match(/^(.+?\s+\d+.*?),\s*(\d{4}\s*[A-Za-z]{2})\s+(.+)$/);
    if (dutchMatch) {
      const streetWithNumber = dutchMatch[1].trim();
      postcode = dutchMatch[2].trim();
      city = dutchMatch[3].trim();
      country = "Nederland";
      
      // Extract street and house number
      const streetNumberMatch = streetWithNumber.match(/^(.+?)\s+(\d+.*?)$/);
      if (streetNumberMatch) {
        street = streetNumberMatch[1];
        houseNumber = streetNumberMatch[2];
      } else {
        street = streetWithNumber;
      }
    } else {
      // Try Belgian address pattern: "Rue de la Paix 15, 1000 Bruxelles" or "Kerkstraat 23, 2000 Antwerpen"
      const belgianMatch = fullAddress.match(/^(.+?\s+\d+.*?),\s*(\d{4})\s+(.+)$/);
      if (belgianMatch) {
        const streetWithNumber = belgianMatch[1].trim();
        postcode = belgianMatch[2].trim();
        city = belgianMatch[3].trim();
        country = "België";
        
        // Extract street and house number
        const streetNumberMatch = streetWithNumber.match(/^(.+?)\s+(\d+.*?)$/);
        if (streetNumberMatch) {
          street = streetNumberMatch[1];
          houseNumber = streetNumberMatch[2];
        } else {
          street = streetWithNumber;
        }
      } else {
        // Generic parsing with comma separation for other formats
        const addressParts = fullAddress.split(',').map(p => p.trim());
        if (addressParts.length >= 2) {
          // First part should be street + number
          const streetPart = addressParts[0];
          const streetMatch = streetPart.match(/^(.+?)\s+(\d+.*?)$/);
          if (streetMatch) {
            street = streetMatch[1];
            houseNumber = streetMatch[2];
          } else {
            street = streetPart;
          }
          
          // Last part should contain postcode and city
          const lastPart = addressParts[addressParts.length - 1];
          
          // Try Dutch postcode pattern first (4 digits + 2 letters)
          const dutchPostcodeMatch = lastPart.match(/(\d{4}\s*[A-Za-z]{2})/);
          if (dutchPostcodeMatch) {
            postcode = dutchPostcodeMatch[1];
            city = lastPart.replace(dutchPostcodeMatch[0], '').trim();
            country = "Nederland";
          } else {
            // Try Belgian postcode pattern (4 digits only)
            const belgianPostcodeMatch = lastPart.match(/(\d{4})/);
            if (belgianPostcodeMatch) {
              postcode = belgianPostcodeMatch[1];
              city = lastPart.replace(belgianPostcodeMatch[0], '').trim();
              country = "België";
            } else {
              // No postcode found, treat as city only
              city = lastPart;
            }
          }
        } else {
          // Single string fallback
          street = fullAddress;
        }
      }
    }
  }

  // Create comprehensive notes with all client info - no standard TBGS text
  let notes = "";
  
  if (formData.selectedService) {
    notes += `Service: ${formData.selectedService}\n`;
  }
  
  if (formData.projectDescription) {
    notes += `Beschrijving: ${formData.projectDescription}\n`;
  }
  
  if (notes.length === 0) {
    notes = "Klant aangemaakt via TBGS website";
  } else {
    notes += `\nKlant aangemaakt via TBGS website`;
  }

  // Create display name for WhatsApp recognition: voornaam achternaam, straatnaam huisnummer, postcode stad (NO country)
  const namePart = [formData.firstName, formData.lastName].filter(Boolean).join(' ');
  const addressPart = [street, houseNumber].filter(Boolean).join(' ');
  const locationPart = [postcode, city].filter(Boolean).join(' '); // Only postcode and city, NO country
  
  const displayParts = [namePart, addressPart, locationPart].filter(Boolean);
  const fullDisplayName = displayParts.join(', ');

  // Set region based on country for better address display
  let region = "";
  if (country === "Nederland") {
    region = "Noord-Brabant";
  } else if (country === "België") {
    region = ""; // Let Belgium determine region automatically
  }

  return createVCard({
    givenName: fullDisplayName, // Full info in firstname for WhatsApp: naam, adres, postcode stad (NO country)
    familyName: "", // Keep lastname empty to avoid duplication
    fullName: fullDisplayName,
    email: formData.email,
    mobile: formData.phone ? formData.phone : undefined, // Only add if client provided
    phone: undefined, // No work number unless provided
    street: [street, houseNumber].filter(Boolean).join(' '), // Complete street address: Hurkssestraat 64
    city: city, // Exact city: Eindhoven/Antwerpen (NO country)
    postcode: postcode, // Exact postcode: 5652 AH / 2000
    country: country, // Nederland or België - separate field
    region: region, // Province/region based on country
    org: "TBGS B.V.",
    title: [street, houseNumber, postcode, city].filter(Boolean).join(' '), // Address in title: straatnaam huisnummer postcode stad (NO country)
    url: undefined, // Remove homepage URL
    notes
  });
}