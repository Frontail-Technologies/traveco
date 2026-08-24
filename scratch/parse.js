const fs = require('fs');

const text = fs.readFileSync('scratch/pdf_full_text.txt', 'utf8');

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Republic)", "Democratic Republic of the Congo", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea-Bissau", "Guinea", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

// Re-map multiline / corrupted names specifically as they appear in pdf-parse output
const specialNames = {
    "Democratic Republic of": "Democratic Republic of the Congo",
    "Saint Vincent and the": "Saint Vincent and the Grenadines",
    "Cte d'Ivoire": "Côte d'Ivoire",
    "Côte d’Ivoire": "Côte d'Ivoire",
    "C\u00f4te d'Ivoire": "Côte d'Ivoire"
};

const matchKeys = [...countries, ...Object.keys(specialNames)];
matchKeys.sort((a, b) => b.length - a.length);

let lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
let parsedData = [];

let currentCountry = null;
let currentBlock = [];
let matrixStarted = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (!matrixStarted) {
        if (line.startsWith("Afghanistan")) {
            matrixStarted = true;
        } else {
            continue; // Skip all pre-matrix text
        }
    }

    if (line.includes("Global Visa Desk Reference") || 
        line.includes("COUNTRY MATRIX") || 
        line.includes("Core checklistIndicative") || 
        line.includes("Tourist route for Indian ordinary") ||
        line.includes("3. CASE-TYPE CHECKLISTS") ||
        line === "passport") {
        
        if (line.includes("3. CASE-TYPE CHECKLISTS")) {
            break; // End of matrix
        }
        continue;
    }
    
    // Check if line starts with a country name
    let foundCountry = null;
    let matchStr = null;
    for (let c of matchKeys) {
        if (line.startsWith(c)) {
            matchStr = c;
            foundCountry = specialNames[c] || c;
            break;
        }
    }

    if (foundCountry) {
        if (currentCountry) {
            parsedData.push({ country: currentCountry, lines: currentBlock });
        }
        currentCountry = foundCountry;
        currentBlock = [line.substring(matchStr.length).trim()]; 
        
        // If it was a split line, the next line is the rest of the name, we should skip it
        if (matchStr === "Democratic Republic of" && lines[i+1].startsWith("the Congo")) i++;
        if (matchStr === "Saint Vincent and the" && lines[i+1].startsWith("Grenadines")) i++;

    } else if (currentCountry) {
        currentBlock.push(line);
    }
}

if (currentCountry) {
    parsedData.push({ country: currentCountry, lines: currentBlock });
}

function extractFields(country, block) {
    let fullText = block.join(' ');
    
    // Typical markers:
    let feeIndex = fullText.search(/(Live fee required:|Government fee generally|Arrival visa fee varies by|No visa fee for the visa-free|Electronic authorisation fee varies;|Electronic authorisation fee|Government fee)/);
    let processingIndex = fullText.search(/(Destination-specific;|Often 2–7 working days,|Normally 15 calendar days|No pre-travel visa in the|Generally processed at\s*arrival|Often electronic and|No pre-travel visa|Destination-specific; allow)/);
    let checklistIndex = fullText.indexOf('Passport');
    
    if (checklistIndex === -1) checklistIndex = 0; // fallback
    if (processingIndex === -1) processingIndex = checklistIndex + 50; 
    if (feeIndex === -1) feeIndex = processingIndex + 50;

    // Safety checks for bad parsing indices
    if (processingIndex < checklistIndex) processingIndex = checklistIndex + Math.floor((fullText.length - checklistIndex) / 2);
    if (feeIndex < processingIndex) feeIndex = processingIndex + Math.floor((fullText.length - processingIndex) / 2);

    let touristRoute = fullText.substring(0, checklistIndex).trim();
    let coreChecklistStr = fullText.substring(checklistIndex, processingIndex).trim();
    let indicativeProcessing = fullText.substring(processingIndex, feeIndex).trim();
    let feeHandling = fullText.substring(feeIndex).trim();
    
    if (country === 'India') {
        touristRoute = "Not applicable for Indian citizens";
        coreChecklistStr = "Passport + application + photo + itinerary + accommodation + funds + employment/business evidence + invitation/sponsor documents where applicable.";
        indicativeProcessing = "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.";
        feeHandling = "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.";
    }

    let items = coreChecklistStr.split('+').map(s => s.trim()).filter(s => s.length > 0);
    
    return {
        country,
        touristRoute,
        coreChecklist: items,
        indicativeProcessing,
        feeHandling
    };
}

const finalRecords = [];
let missing = [];

parsedData.forEach(data => {
    try {
        const record = extractFields(data.country, data.lines);
        
        let region = "Unknown";
        const eu = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
        const asia = ["Afghanistan", "Armenia", "Azerbaijan", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Georgia", "India", "Indonesia", "Japan", "Kazakhstan", "Kyrgyzstan", "Laos", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Pakistan", "Philippines", "Singapore", "South Korea", "Sri Lanka", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "Uzbekistan", "Vietnam"];
        const me = ["Bahrain", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates", "Yemen"];
        const africa = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo (Republic)", "Democratic Republic of the Congo", "Côte d’Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"];
        const americas = ["Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Grenada", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Suriname", "Trinidad and Tobago", "United States", "Uruguay", "Venezuela"];
        const oceania = ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"];
        
        if (eu.includes(data.country)) region = "Europe";
        else if (asia.includes(data.country)) region = "Asia";
        else if (me.includes(data.country)) region = "Middle East";
        else if (africa.includes(data.country)) region = "Africa";
        else if (americas.includes(data.country)) region = "Americas";
        else if (oceania.includes(data.country)) region = "Oceania";
        
        record.region = region;
        
        const ccMap = {
            "Afghanistan": "AF", "Albania": "AL", "Algeria": "DZ", "Andorra": "AD", "Angola": "AO", "Antigua and Barbuda": "AG", "Argentina": "AR", "Armenia": "AM", "Australia": "AU", "Austria": "AT", "Azerbaijan": "AZ",
            "Bahamas": "BS", "Bahrain": "BH", "Bangladesh": "BD", "Barbados": "BB", "Belarus": "BY", "Belgium": "BE", "Belize": "BZ", "Benin": "BJ", "Bhutan": "BT", "Bolivia": "BO", "Bosnia and Herzegovina": "BA", "Botswana": "BW", "Brazil": "BR", "Brunei": "BN", "Bulgaria": "BG", "Burkina Faso": "BF", "Burundi": "BI",
            "Cabo Verde": "CV", "Cambodia": "KH", "Cameroon": "CM", "Canada": "CA", "Central African Republic": "CF", "Chad": "TD", "Chile": "CL", "China": "CN", "Colombia": "CO", "Comoros": "KM", "Congo (Republic)": "CG", "Democratic Republic of the Congo": "CD", "Costa Rica": "CR", "Côte d'Ivoire": "CI", "Croatia": "HR", "Cuba": "CU", "Cyprus": "CY", "Czechia": "CZ",
            "Denmark": "DK", "Djibouti": "DJ", "Dominica": "DM", "Dominican Republic": "DO",
            "Ecuador": "EC", "Egypt": "EG", "El Salvador": "SV", "Equatorial Guinea": "GQ", "Eritrea": "ER", "Estonia": "EE", "Eswatini": "SZ", "Ethiopia": "ET",
            "Fiji": "FJ", "Finland": "FI", "France": "FR",
            "Gabon": "GA", "Gambia": "GM", "Georgia": "GE", "Germany": "DE", "Ghana": "GH", "Greece": "GR", "Grenada": "GD", "Guatemala": "GT", "Guinea-Bissau": "GW", "Guinea": "GN", "Guyana": "GY",
            "Haiti": "HT", "Honduras": "HN", "Hungary": "HU",
            "Iceland": "IS", "India": "IN", "Indonesia": "ID", "Iran": "IR", "Iraq": "IQ", "Ireland": "IE", "Israel": "IL", "Italy": "IT",
            "Jamaica": "JM", "Japan": "JP", "Jordan": "JO",
            "Kazakhstan": "KZ", "Kenya": "KE", "Kiribati": "KI", "Kuwait": "KW", "Kyrgyzstan": "KG",
            "Laos": "LA", "Latvia": "LV", "Lebanon": "LB", "Lesotho": "LS", "Liberia": "LR", "Libya": "LY", "Liechtenstein": "LI", "Lithuania": "LT", "Luxembourg": "LU",
            "Madagascar": "MG", "Malawi": "MW", "Malaysia": "MY", "Maldives": "MV", "Mali": "ML", "Malta": "MT", "Marshall Islands": "MH", "Mauritania": "MR", "Mauritius": "MU", "Mexico": "MX", "Micronesia": "FM", "Moldova": "MD", "Monaco": "MC", "Mongolia": "MN", "Montenegro": "ME", "Morocco": "MA", "Mozambique": "MZ", "Myanmar": "MM",
            "Namibia": "NA", "Nauru": "NR", "Nepal": "NP", "Netherlands": "NL", "New Zealand": "NZ", "Nicaragua": "NI", "Niger": "NE", "Nigeria": "NG", "North Korea": "KP", "North Macedonia": "MK", "Norway": "NO",
            "Oman": "OM",
            "Pakistan": "PK", "Palau": "PW", "Palestine": "PS", "Panama": "PA", "Papua New Guinea": "PG", "Paraguay": "PY", "Peru": "PE", "Philippines": "PH", "Poland": "PL", "Portugal": "PT",
            "Qatar": "QA",
            "Romania": "RO", "Russia": "RU", "Rwanda": "RW",
            "Saint Kitts and Nevis": "KN", "Saint Lucia": "LC", "Saint Vincent and the Grenadines": "VC", "Samoa": "WS", "San Marino": "SM", "Sao Tome and Principe": "ST", "Saudi Arabia": "SA", "Senegal": "SN", "Serbia": "RS", "Seychelles": "SC", "Sierra Leone": "SL", "Singapore": "SG", "Slovakia": "SK", "Slovenia": "SI", "Solomon Islands": "SB", "Somalia": "SO", "South Africa": "ZA", "South Korea": "KR", "South Sudan": "SS", "Spain": "ES", "Sri Lanka": "LK", "Sudan": "SD", "Suriname": "SR", "Sweden": "SE", "Switzerland": "CH", "Syria": "SY",
            "Tajikistan": "TJ", "Tanzania": "TZ", "Thailand": "TH", "Timor-Leste": "TL", "Togo": "TG", "Tonga": "TO", "Trinidad and Tobago": "TT", "Tunisia": "TN", "Turkey": "TR", "Turkmenistan": "TM", "Tuvalu": "TV",
            "Uganda": "UG", "Ukraine": "UA", "United Arab Emirates": "AE", "United Kingdom": "GB", "United States": "US", "Uruguay": "UY", "Uzbekistan": "UZ",
            "Vanuatu": "VU", "Vatican City": "VA", "Venezuela": "VE", "Vietnam": "VN",
            "Yemen": "YE",
            "Zambia": "ZM", "Zimbabwe": "ZW"
        };
        
        record.countryCode = ccMap[record.country] || "XX";
        record.slug = data.country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        finalRecords.push(record);
    } catch(e) {
        console.error(`Error parsing ${data.country}:`, e.message);
    }
});

const parsedNames = finalRecords.map(r => r.country);
countries.forEach(c => {
    if (!parsedNames.includes(c)) missing.push(c);
});

console.log(`Expected country records: 195`);
console.log(`Parsed country records: ${finalRecords.length}`);
if (missing.length > 0) {
    console.log(`Missing countries: ${missing.join(', ')}`);
}

fs.writeFileSync('src/data/destinations.json', JSON.stringify(finalRecords, null, 2));
console.log('Dataset written to src/data/destinations.json');
