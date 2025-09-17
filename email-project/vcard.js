// vCard generation utility for TBGS business cards
const crypto = require('crypto');

/** vCard field escaping */
function esc(s = "") {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

/** vCard line folding (compatibility with Outlook/Gmail) */
function fold(line) {
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

/** Generate high-end vCard 3.0 as Buffer with TBGS branding */
function createVCard(c = {}) {
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d+Z$/, "Z"); // 20250822T120000Z
  const uid = crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString("hex");

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
  const phone = esc(c.phone || "");
  const mobile = esc(c.mobile || "");
  const url = esc(c.url || "");
  const notes = esc(c.notes || "");

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
    mapsUrl ? fold(`URL;TYPE=MAPS:${mapsUrl}`) : "",
    notes ? fold(`NOTE:${notes}`) : "",
    `REV:${now}`,
    `UID:${uid}`,
    "END:VCARD"
  ];

  const vcf = lines.filter(Boolean).join("\r\n") + "\r\n";
  return Buffer.from(vcf, "utf8");
}

/** Create TBGS vCard from form data with address parsing */
function createTBGSVCard(formData = {}) {
  // Use individual address components if provided, otherwise parse address string
  let street = formData.street || "";
  let city = formData.city || "";
  let postcode = formData.postcode || "";
  let houseNumber = formData.houseNumber || "";
  let country = formData.country || "Nederland";
  
  // Fallback: parse address string if no individual components  
  if (!street && !city && !postcode && formData.address) {
    const fullAddress = formData.address.trim();
    
    // Try Dutch address pattern: "Hurkssestraat 64, 5652 AH Eindhoven"
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
      // Try Belgian address pattern
      const belgianMatch = fullAddress.match(/^(.+?\s+\d+.*?),\s*(\d{4})\s+(.+)$/);
      if (belgianMatch) {
        const streetWithNumber = belgianMatch[1].trim();
        postcode = belgianMatch[2].trim();
        city = belgianMatch[3].trim();
        country = "België";
        
        const streetNumberMatch = streetWithNumber.match(/^(.+?)\s+(\d+.*?)$/);
        if (streetNumberMatch) {
          street = streetNumberMatch[1];
          houseNumber = streetNumberMatch[2];
        } else {
          street = streetWithNumber;
        }
      }
    }
  }

  // Build comprehensive notes with service and project details
  const notes = [
    formData.selectedService ? `Service: ${formData.selectedService}` : "",
    formData.projectDescription ? `Project: ${formData.projectDescription}` : "",
    formData.contactPreference ? `Contact via: ${formData.contactPreference}` : "",
    formData.formType ? `Form type: ${formData.formType}` : ""
  ].filter(Boolean).join(" | ");

  // Determine region based on country and postcode
  let region = "";
  if (country === "Nederland" && postcode) {
    const pc = postcode.replace(/\s/g, "");
    if (pc.match(/^[1-3]/)) region = "Noord-Holland/Zuid-Holland";
    else if (pc.match(/^[4-5]/)) region = "Noord-Brabant/Zeeland";
    else if (pc.match(/^[6-7]/)) region = "Gelderland/Overijssel";
    else if (pc.match(/^[8-9]/)) region = "Friesland/Groningen/Drenthe";
  } else if (country === "België" && postcode) {
    const pc = parseInt(postcode);
    if (pc >= 1000 && pc <= 1299) region = "Brussels";
    else if (pc >= 2000 && pc <= 2999) region = "Antwerpen";
    else if (pc >= 3000 && pc <= 3499) region = "Vlaams-Brabant";
    else if (pc >= 9000 && pc <= 9999) region = "Oost-Vlaanderen";
  }

  const cleanCity = city.replace(/^\d+\s+/, "");

  return createVCard({
    givenName: formData.firstName,
    familyName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    street: [street, houseNumber].filter(Boolean).join(" "),
    city: cleanCity,
    postcode: postcode,
    country: country,
    region: region,
    org: "TBGS B.V.",
    title: [street, houseNumber, postcode, cleanCity].filter(Boolean).join(' '),
    url: undefined,
    notes
  });
}

module.exports = {
  createVCard,
  createTBGSVCard
};