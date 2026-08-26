export type ServiceDestinationKind = "country" | "group";

export interface VisaOption {
  mode: string;
  maxStay: string;
  passportValidity: string;
  currency: string;
  governmentFee: string;
  applicationCentreFee: string;
  travecoServiceFee: string;
  estimatedTotal: string;
  officialProcessingTime: string;
  notes: string;
}

export interface ServiceDestination {
  slug: string;
  name: string;
  kind: ServiceDestinationKind;
  countryCode: string | null;
  region: string;
  visaOptions: VisaOption[];
}

export const serviceDestinations: ServiceDestination[] = [
  {
    "slug": "armenia",
    "name": "Armenia",
    "kind": "country",
    "countryCode": "AM",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "120 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "4200",
        "officialProcessingTime": "4-5 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "azerbaijan",
    "name": "Azerbaijan",
    "kind": "country",
    "countryCode": "AZ",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "4100",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "australia",
    "name": "Australia",
    "kind": "country",
    "countryCode": "AU",
    "region": "Oceania",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "18800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "20800",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "bahrain",
    "name": "Bahrain",
    "kind": "country",
    "countryCode": "BH",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "14 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "1950",
        "applicationCentreFee": "-",
        "travecoServiceFee": "850",
        "estimatedTotal": "2800",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "benin",
    "name": "Benin",
    "kind": "country",
    "countryCode": "BJ",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~30–90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "7400",
        "officialProcessingTime": "4-7 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "cambodia",
    "name": "Cambodia",
    "kind": "country",
    "countryCode": "KH",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "3700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "4900",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "colombia",
    "name": "Colombia",
    "kind": "country",
    "countryCode": "CO",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "27840",
        "applicationCentreFee": "5990",
        "travecoServiceFee": "3000",
        "estimatedTotal": "36830",
        "officialProcessingTime": "25-30 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "c-te-d-ivoire",
    "name": "Côte d’Ivoire",
    "kind": "country",
    "countryCode": "CI",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "8600",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2100",
        "estimatedTotal": "10700",
        "officialProcessingTime": "2-3 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "djibouti",
    "name": "Djibouti",
    "kind": "country",
    "countryCode": "DJ",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "7300",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "ethiopia",
    "name": "Ethiopia",
    "kind": "country",
    "countryCode": "ET",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "6100",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "7600",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "georgia",
    "name": "Georgia",
    "kind": "country",
    "countryCode": "GE",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "1996.86",
        "applicationCentreFee": "1500",
        "travecoServiceFee": "1500",
        "estimatedTotal": "4996.86",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "hong-kong-sar",
    "name": "Hong Kong SAR",
    "kind": "country",
    "countryCode": "HK",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / ETA",
        "maxStay": "~14 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "-",
        "applicationCentreFee": "-",
        "travecoServiceFee": "500",
        "estimatedTotal": "500",
        "officialProcessingTime": "ON THE SPOT",
        "notes": ""
      }
    ]
  },
  {
    "slug": "indonesia",
    "name": "Indonesia",
    "kind": "country",
    "countryCode": "ID",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "3100",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1000",
        "estimatedTotal": "4100",
        "officialProcessingTime": "ON THE SPOT",
        "notes": ""
      }
    ]
  },
  {
    "slug": "iran",
    "name": "Iran",
    "kind": "country",
    "countryCode": "IR",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "1500",
        "applicationCentreFee": "-",
        "travecoServiceFee": "850",
        "estimatedTotal": "2350",
        "officialProcessingTime": "5-10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "jordan",
    "name": "Jordan",
    "kind": "country",
    "countryCode": "JO",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "6900",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "kazakhstan",
    "name": "Kazakhstan",
    "kind": "country",
    "countryCode": "KZ",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / Visa Free",
        "maxStay": "~14–30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "7000",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "kenya",
    "name": "Kenya",
    "kind": "country",
    "countryCode": "KE",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2950",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1000",
        "estimatedTotal": "3950",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "kyrgyzstan",
    "name": "Kyrgyzstan",
    "kind": "country",
    "countryCode": "KG",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~30–90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "6000",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "laos",
    "name": "Laos",
    "kind": "country",
    "countryCode": "LA",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "6000",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "madagascar",
    "name": "Madagascar",
    "kind": "country",
    "countryCode": "MG",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "3700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "4900",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "malawi",
    "name": "Malawi",
    "kind": "country",
    "countryCode": "MW",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4870",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6370",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "malaysia",
    "name": "Malaysia",
    "kind": "country",
    "countryCode": "MY",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / Visa Free",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "FREE TILL DECEMBER 2026",
        "applicationCentreFee": "-",
        "travecoServiceFee": "300",
        "estimatedTotal": "300",
        "officialProcessingTime": "ON THE SPOT",
        "notes": ""
      }
    ]
  },
  {
    "slug": "mauritius",
    "name": "Mauritius",
    "kind": "country",
    "countryCode": "MU",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "Visa Free",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "FREE",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "mozambique",
    "name": "Mozambique",
    "kind": "country",
    "countryCode": "MZ",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "11700",
        "officialProcessingTime": "5-6 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "myanmar",
    "name": "Myanmar",
    "kind": "country",
    "countryCode": "MM",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~28–30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6300",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      },
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6400",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "nepal",
    "name": "Nepal",
    "kind": "country",
    "countryCode": "NP",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "Visa Free",
        "maxStay": "Unlimited",
        "passportValidity": "Valid ID",
        "currency": "INR",
        "governmentFee": "FREE",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "oman",
    "name": "Oman",
    "kind": "country",
    "countryCode": "OM",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "Visa on Arrival (conditional)",
        "maxStay": "~14–30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5100",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6600",
        "officialProcessingTime": "4-5 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "qatar",
    "name": "Qatar",
    "kind": "country",
    "countryCode": "QA",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2700",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1000",
        "estimatedTotal": "3700",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "rwanda",
    "name": "Rwanda",
    "kind": "country",
    "countryCode": "RW",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "Visa-free entry",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "saint-lucia",
    "name": "Saint Lucia",
    "kind": "country",
    "countryCode": "LC",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "VoA / eVisa/ Prior Travel Authorisation (PTA)",
        "maxStay": "~60 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4600",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6100",
        "officialProcessingTime": "6-7 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "saint-vincent-grenadines",
    "name": "Saint Vincent & Grenadines",
    "kind": "country",
    "countryCode": "VC",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Visa Free",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "Visa-free entry",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "seychelles",
    "name": "Seychelles",
    "kind": "country",
    "countryCode": "SC",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA/ Travel Authorisation (TA)",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "1600",
        "applicationCentreFee": "-",
        "travecoServiceFee": "850",
        "estimatedTotal": "2450",
        "officialProcessingTime": "Depends on the selected Standard / Premium / Expedited package",
        "notes": ""
      }
    ]
  },
  {
    "slug": "sri-lanka",
    "name": "Sri Lanka",
    "kind": "country",
    "countryCode": "LK",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "ETA / VoA / eVisa",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "3900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1000",
        "estimatedTotal": "4900",
        "officialProcessingTime": "WITHIN 24 HOURS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "tajikistan",
    "name": "Tajikistan",
    "kind": "country",
    "countryCode": "TJ",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~60 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "6100",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "tanzania",
    "name": "Tanzania",
    "kind": "country",
    "countryCode": "TZ",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA / eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6300",
        "officialProcessingTime": "10-12 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "thailand",
    "name": "Thailand",
    "kind": "country",
    "countryCode": "TH",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / VoA / Visa Free/ Thailand Digital Arrival Card (TDAC)",
        "maxStay": "~15–60 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "FREE",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "timor-leste",
    "name": "Timor-Leste",
    "kind": "country",
    "countryCode": "TL",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "4400",
        "officialProcessingTime": "5-10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "tuvalu",
    "name": "Tuvalu",
    "kind": "country",
    "countryCode": "TV",
    "region": "Oceania",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "7000",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "9000",
        "officialProcessingTime": "5-10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "united-states-of-america",
    "name": "United States of America",
    "kind": "country",
    "countryCode": "US",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "180 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "18130",
        "applicationCentreFee": "EXPRESS APPOINTMENT FEE EXTRA CHARGES",
        "travecoServiceFee": "3500",
        "estimatedTotal": "21630",
        "officialProcessingTime": "4-7 WORKING DAYS AFTER APPROVAL",
        "notes": ""
      }
    ]
  },
  {
    "slug": "vanuatu",
    "name": "Vanuatu",
    "kind": "country",
    "countryCode": "VU",
    "region": "Oceania",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "FREE",
        "applicationCentreFee": "-",
        "travecoServiceFee": "NIL",
        "estimatedTotal": "",
        "officialProcessingTime": "-",
        "notes": ""
      }
    ]
  },
  {
    "slug": "vietnam",
    "name": "Vietnam",
    "kind": "country",
    "countryCode": "VN",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa / VoA",
        "maxStay": "~30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1800",
        "estimatedTotal": "6700",
        "officialProcessingTime": "3-5 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "zimbabwe",
    "name": "Zimbabwe",
    "kind": "country",
    "countryCode": "ZW",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "VoA",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "3500",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1200",
        "estimatedTotal": "4700",
        "officialProcessingTime": "7-8 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "india-for-foreigners",
    "name": "India (for foreigners)",
    "kind": "country",
    "countryCode": "IN",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "Country-specific — the fee varies by nationality",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "2000",
        "officialProcessingTime": "5 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "israel",
    "name": "Israel",
    "kind": "country",
    "countryCode": "IL",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2600",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "4100",
        "officialProcessingTime": "Up to 3 weeks for standard tourist applications in India; Fast Track: approximately 10 working days",
        "notes": ""
      }
    ]
  },
  {
    "slug": "mongolia",
    "name": "Mongolia",
    "kind": "country",
    "countryCode": "MN",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6400",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "uganda",
    "name": "Uganda",
    "kind": "country",
    "countryCode": "UG",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4870",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6370",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "uzbekistan",
    "name": "Uzbekistan",
    "kind": "country",
    "countryCode": "UZ",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "~90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2300",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1000",
        "estimatedTotal": "3300",
        "officialProcessingTime": "2-3 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "bolivia",
    "name": "Bolivia",
    "kind": "country",
    "countryCode": "BO",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "DD PAYMENT IN EMBASSY ON INTERVIEW BY EMAIL APPOINTMENT",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "2000",
        "officialProcessingTime": "5-10 WORKING DAYS AFTER APPROVAL",
        "notes": ""
      }
    ]
  },
  {
    "slug": "brazil",
    "name": "Brazil",
    "kind": "country",
    "countryCode": "BR",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "8000",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "10000",
        "officialProcessingTime": "12-15 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "turkiye",
    "name": "Türkiye",
    "kind": "country",
    "countryCode": "TR",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "eVisa / eVisa on Arrival (conditional)",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4600",
        "applicationCentreFee": "",
        "travecoServiceFee": "1500",
        "estimatedTotal": "6100",
        "officialProcessingTime": "WITHIN 24-48 HOURS",
        "notes": ""
      },
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "12300",
        "applicationCentreFee": "6839",
        "travecoServiceFee": "2800",
        "estimatedTotal": "21939",
        "officialProcessingTime": "12-15 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "canada",
    "name": "Canada",
    "kind": "country",
    "countryCode": "CA",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "7100",
        "applicationCentreFee": "6200",
        "travecoServiceFee": "3500",
        "estimatedTotal": "16800",
        "officialProcessingTime": "25-30 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "united-kingdom",
    "name": "United Kingdom",
    "kind": "country",
    "countryCode": "GB",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "18800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2500",
        "estimatedTotal": "21300",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "south-korea",
    "name": "South Korea",
    "kind": "country",
    "countryCode": "KR",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4500",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "6500",
        "officialProcessingTime": "9-15 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "chile",
    "name": "Chile",
    "kind": "country",
    "countryCode": "CL",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "6900",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": "PAY AT EMBASSY AT THE TIME OF INTERVIEW"
      }
    ]
  },
  {
    "slug": "japan",
    "name": "Japan",
    "kind": "country",
    "countryCode": "JP",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "15 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "1300",
        "applicationCentreFee": "-",
        "travecoServiceFee": "850",
        "estimatedTotal": "2150",
        "officialProcessingTime": "10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "south-africa",
    "name": "South Africa",
    "kind": "country",
    "countryCode": "ZA",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa /ETA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "7300",
        "officialProcessingTime": "3-15 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "egypt",
    "name": "Egypt",
    "kind": "country",
    "countryCode": "EG",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "Sticker / eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "4400",
        "officialProcessingTime": "7-8 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "philippines",
    "name": "Philippines",
    "kind": "country",
    "countryCode": "PH",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "Sticker / eVisa",
        "maxStay": "90 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "6720",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "8220",
        "officialProcessingTime": "7-10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "schengen-countries",
    "name": "Schengen Countries",
    "kind": "group",
    "countryCode": null,
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "france",
    "name": "France",
    "kind": "country",
    "countryCode": "FR",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "germany",
    "name": "Germany",
    "kind": "country",
    "countryCode": "DE",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "finland",
    "name": "Finland",
    "kind": "country",
    "countryCode": "FI",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "netherlands",
    "name": "Netherlands",
    "kind": "country",
    "countryCode": "NL",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "norway",
    "name": "Norway",
    "kind": "country",
    "countryCode": "NO",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "denmark",
    "name": "Denmark",
    "kind": "country",
    "countryCode": "DK",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "belgium",
    "name": "Belgium",
    "kind": "country",
    "countryCode": "BE",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "greece",
    "name": "Greece",
    "kind": "country",
    "countryCode": "GR",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "ireland",
    "name": "Ireland",
    "kind": "country",
    "countryCode": "IE",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "12808",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "15808",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "iceland",
    "name": "Iceland",
    "kind": "country",
    "countryCode": "IS",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "argentina",
    "name": "Argentina",
    "kind": "country",
    "countryCode": "AR",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "eVisa / Sticker (conditional)",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "GRATIS",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "3000",
        "officialProcessingTime": "8-10 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "austria",
    "name": "Austria",
    "kind": "country",
    "countryCode": "AT",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "croatia",
    "name": "Croatia",
    "kind": "country",
    "countryCode": "HR",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "czech-republic",
    "name": "Czech Republic",
    "kind": "country",
    "countryCode": "CZ",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "estonia",
    "name": "Estonia",
    "kind": "country",
    "countryCode": "EE",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "hungary",
    "name": "Hungary",
    "kind": "country",
    "countryCode": "HU",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "italy",
    "name": "Italy",
    "kind": "country",
    "countryCode": "IT",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "latvia",
    "name": "Latvia",
    "kind": "country",
    "countryCode": "LV",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "liechtenstein",
    "name": "Liechtenstein",
    "kind": "country",
    "countryCode": "LI",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "luxembourg",
    "name": "Luxembourg",
    "kind": "country",
    "countryCode": "LU",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "lithuania",
    "name": "Lithuania",
    "kind": "country",
    "countryCode": "LT",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "malta",
    "name": "Malta",
    "kind": "country",
    "countryCode": "MT",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "poland",
    "name": "Poland",
    "kind": "country",
    "countryCode": "PL",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "portugal",
    "name": "Portugal",
    "kind": "country",
    "countryCode": "PT",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "romania",
    "name": "Romania",
    "kind": "country",
    "countryCode": "RO",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "slovakia",
    "name": "Slovakia",
    "kind": "country",
    "countryCode": "SK",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "slovenia",
    "name": "Slovenia",
    "kind": "country",
    "countryCode": "SI",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "spain",
    "name": "Spain",
    "kind": "country",
    "countryCode": "ES",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "sweden",
    "name": "Sweden",
    "kind": "country",
    "countryCode": "SE",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "switzerland",
    "name": "Switzerland",
    "kind": "country",
    "countryCode": "CH",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "STICKER VISA",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "9910",
        "applicationCentreFee": "APPOINTMENT",
        "travecoServiceFee": "3000",
        "estimatedTotal": "12910",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "peru",
    "name": "Peru",
    "kind": "country",
    "countryCode": "PE",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "2900",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1800",
        "estimatedTotal": "4700",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "democratic-republic-of-the-congo",
    "name": "Democratic Republic of the Congo",
    "kind": "country",
    "countryCode": "CD",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "Varies by visa type, nationality and issuing mission;",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2500",
        "estimatedTotal": "2500",
        "officialProcessingTime": "10-12 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "taiwan",
    "name": "Taiwan",
    "kind": "country",
    "countryCode": "TW",
    "region": "Asia",
    "visaOptions": [
      {
        "mode": "Sticker Visa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5100",
        "applicationCentreFee": "",
        "travecoServiceFee": "2000",
        "estimatedTotal": "7100",
        "officialProcessingTime": "3-5 WORKING DAYS",
        "notes": ""
      },
      {
        "mode": "ETA / eVisa (conditional)",
        "maxStay": "15 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "4400",
        "applicationCentreFee": "EXPRESS FEE EXTRA",
        "travecoServiceFee": "2000",
        "estimatedTotal": "6400",
        "officialProcessingTime": "5-7 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "united-arab-emirates-uae",
    "name": "United Arab Emirates (UAE)",
    "kind": "country",
    "countryCode": "AE",
    "region": "Middle East",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "7800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1500",
        "estimatedTotal": "9300",
        "officialProcessingTime": "5-7 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "kind": "country",
    "countryCode": "NZ",
    "region": "Oceania",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "25500",
        "applicationCentreFee": "FAMILY CATEGORY VISA FEE ARE LOW",
        "travecoServiceFee": "3000",
        "estimatedTotal": "28500",
        "officialProcessingTime": "15-20 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "russia",
    "name": "Russia",
    "kind": "country",
    "countryCode": "RU",
    "region": "Europe",
    "visaOptions": [
      {
        "mode": "Sticker / eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5800",
        "applicationCentreFee": "-",
        "travecoServiceFee": "1800",
        "estimatedTotal": "7600",
        "officialProcessingTime": "4-5 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "mexico",
    "name": "Mexico",
    "kind": "country",
    "countryCode": "MX",
    "region": "Americas",
    "visaOptions": [
      {
        "mode": "Sticker / eVisa / VoA (conditional)",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "5800",
        "applicationCentreFee": "FREE",
        "travecoServiceFee": "1800",
        "estimatedTotal": "7600",
        "officialProcessingTime": "2-3 WORKING DAYS",
        "notes": ""
      }
    ]
  },
  {
    "slug": "cameroon",
    "name": "Cameroon",
    "kind": "country",
    "countryCode": "CM",
    "region": "Africa",
    "visaOptions": [
      {
        "mode": "eVisa",
        "maxStay": "30 days",
        "passportValidity": "6 months",
        "currency": "INR",
        "governmentFee": "18000",
        "applicationCentreFee": "-",
        "travecoServiceFee": "2000",
        "estimatedTotal": "20000",
        "officialProcessingTime": "3-4 WORKING DAYS",
        "notes": ""
      }
    ]
  }
];
