export type VisaRegion = 'Europe' | 'Asia' | 'Middle East' | 'Africa' | 'Americas' | 'Oceania';

export type VisaDestination = {
  country: string;
  countryCode: string;
  slug: string;
  region: VisaRegion;
  touristRoute: string;
  coreChecklist: string[];
  indicativeProcessing: string;
  feeHandling: string;
};

export const destinations: VisaDestination[] = [
  {
    "country": "Afghanistan",
    "touristRoute": "Prior visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "AF",
    "slug": "afghanistan"
  },
  {
    "country": "Albania",
    "touristRoute": "eVisa / prior authorisation route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "AL",
    "slug": "albania"
  },
  {
    "country": "Algeria",
    "touristRoute": "Consular visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "DZ",
    "slug": "algeria"
  },
  {
    "country": "Andorra",
    "touristRoute": "Schengen visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "AD",
    "slug": "andorra"
  },
  {
    "country": "Angola",
    "touristRoute": "eVisa / VoA conditions",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "AO",
    "slug": "angola"
  },
  {
    "country": "Antigua and Barbuda",
    "touristRoute": "eVisa / online route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "AG",
    "slug": "antigua-and-barbuda"
  },
  {
    "country": "Argentina",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "AR",
    "slug": "argentina"
  },
  {
    "country": "Armenia",
    "touristRoute": "eVisa / conditional access",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "AM",
    "slug": "armenia"
  },
  {
    "country": "Australia",
    "touristRoute": "eVisa (Visitor 600)",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Oceania",
    "countryCode": "AU",
    "slug": "australia"
  },
  {
    "country": "Austria",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "AT",
    "slug": "austria"
  },
  {
    "country": "Azerbaijan",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "AZ",
    "slug": "azerbaijan"
  },
  {
    "country": "Bahamas",
    "touristRoute": "Visa/entry rules; verify",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "BS",
    "slug": "bahamas"
  },
  {
    "country": "Bahrain",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "BH",
    "slug": "bahrain"
  },
  {
    "country": "Bangladesh",
    "touristRoute": "Visa/entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "BD",
    "slug": "bangladesh"
  },
  {
    "country": "Barbados",
    "touristRoute": "Visa-free / entry conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "BB",
    "slug": "barbados"
  },
  {
    "country": "Belarus",
    "touristRoute": "Conditional visa-free / visa route",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Europe",
    "countryCode": "BY",
    "slug": "belarus"
  },
  {
    "country": "Belgium",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "BE",
    "slug": "belgium"
  },
  {
    "country": "Belize",
    "touristRoute": "Consular visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "BZ",
    "slug": "belize"
  },
  {
    "country": "Benin",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "BJ",
    "slug": "benin"
  },
  {
    "country": "Bhutan",
    "touristRoute": "Entry permit / visa-free arrangement for Indians",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "BT",
    "slug": "bhutan"
  },
  {
    "country": "Bolivia",
    "touristRoute": "VoA / prior online submission conditions",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Americas",
    "countryCode": "BO",
    "slug": "bolivia"
  },
  {
    "country": "Bosnia and Herzegovina",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "BA",
    "slug": "bosnia-and-herzegovina"
  },
  {
    "country": "Botswana",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "BW",
    "slug": "botswana"
  },
  {
    "country": "Brazil",
    "touristRoute": "Visitor visa / electronic or consular route as applicable",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "BR",
    "slug": "brazil"
  },
  {
    "country": "Brunei",
    "touristRoute": "Visa route / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "BN",
    "slug": "brunei"
  },
  {
    "country": "Bulgaria",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "BG",
    "slug": "bulgaria"
  },
  {
    "country": "Burkina Faso",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "BF",
    "slug": "burkina-faso"
  },
  {
    "country": "Burundi",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Africa",
    "countryCode": "BI",
    "slug": "burundi"
  },
  {
    "country": "Cabo Verde",
    "touristRoute": "VoA / electronic pre-registration route",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "CV",
    "slug": "cabo-verde"
  },
  {
    "country": "Cambodia",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "KH",
    "slug": "cambodia"
  },
  {
    "country": "Cameroon",
    "touristRoute": "eVisa / pre-approved VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "CM",
    "slug": "cameroon"
  },
  {
    "country": "Canada",
    "touristRoute": "Visitor visa (TRV)",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "CA",
    "slug": "canada"
  },
  {
    "country": "Central African Republic",
    "touristRoute": "Consular visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "CF",
    "slug": "central-african-republic"
  },
  {
    "country": "Chad",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "TD",
    "slug": "chad"
  },
  {
    "country": "Chile",
    "touristRoute": "Electronic/consular authorisation route",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "CL",
    "slug": "chile"
  },
  {
    "country": "China",
    "touristRoute": "Consular visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "CN",
    "slug": "china"
  },
  {
    "country": "Colombia",
    "touristRoute": "eVisa / online visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "CO",
    "slug": "colombia"
  },
  {
    "country": "Comoros",
    "touristRoute": "VoA / entry rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "KM",
    "slug": "comoros"
  },
  {
    "country": "Congo (Republic)",
    "touristRoute": "Consular/eVisa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "CG",
    "slug": "congo-republic"
  },
  {
    "country": "Costa Rica",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "CR",
    "slug": "costa-rica"
  },
  {
    "country": "Côte d'Ivoire",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "CI",
    "slug": "c-te-d-ivoire"
  },
  {
    "country": "Croatia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "HR",
    "slug": "croatia"
  },
  {
    "country": "Cuba",
    "touristRoute": "Tourist eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "CU",
    "slug": "cuba"
  },
  {
    "country": "Cyprus",
    "touristRoute": "National visa / Schengen-related rules; verify",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "CY",
    "slug": "cyprus"
  },
  {
    "country": "Czechia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "CZ",
    "slug": "czechia"
  },
  {
    "country": "Democratic Republic of the Congo",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "CD",
    "slug": "democratic-republic-of-the-congo"
  },
  {
    "country": "Denmark",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "DK",
    "slug": "denmark"
  },
  {
    "country": "Djibouti",
    "touristRoute": "eVisa / VoA route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "DJ",
    "slug": "djibouti"
  },
  {
    "country": "Dominica",
    "touristRoute": "Visa-free / entry conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "DM",
    "slug": "dominica"
  },
  {
    "country": "Dominican Republic",
    "touristRoute": "eTicket / visa rules; verify",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "DO",
    "slug": "dominican-republic"
  },
  {
    "country": "Ecuador",
    "touristRoute": "Visa/entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "EC",
    "slug": "ecuador"
  },
  {
    "country": "Egypt",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "EG",
    "slug": "egypt"
  },
  {
    "country": "El Salvador",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "SV",
    "slug": "el-salvador"
  },
  {
    "country": "Equatorial Guinea",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "GQ",
    "slug": "equatorial-guinea"
  },
  {
    "country": "Eritrea",
    "touristRoute": "Consular visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Africa",
    "countryCode": "ER",
    "slug": "eritrea"
  },
  {
    "country": "Estonia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting. Country",
    "region": "Europe",
    "countryCode": "EE",
    "slug": "estonia"
  },
  {
    "country": "Eswatini",
    "touristRoute": "Visa/entry rules; verify",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SZ",
    "slug": "eswatini"
  },
  {
    "country": "Ethiopia",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "ET",
    "slug": "ethiopia"
  },
  {
    "country": "Fiji",
    "touristRoute": "VoA / entry conditions",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "FJ",
    "slug": "fiji"
  },
  {
    "country": "Finland",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "FI",
    "slug": "finland"
  },
  {
    "country": "France",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "FR",
    "slug": "france"
  },
  {
    "country": "Gabon",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "GA",
    "slug": "gabon"
  },
  {
    "country": "Gambia",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "GM",
    "slug": "gambia"
  },
  {
    "country": "Georgia",
    "touristRoute": "eVisa / conditional entry",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "GE",
    "slug": "georgia"
  },
  {
    "country": "Germany",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "DE",
    "slug": "germany"
  },
  {
    "country": "Ghana",
    "touristRoute": "eVisa / prior approval route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "GH",
    "slug": "ghana"
  },
  {
    "country": "Greece",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "GR",
    "slug": "greece"
  },
  {
    "country": "Grenada",
    "touristRoute": "Visa-free / entry conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "GD",
    "slug": "grenada"
  },
  {
    "country": "Guatemala",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Americas",
    "countryCode": "GT",
    "slug": "guatemala"
  },
  {
    "country": "Guinea",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Africa",
    "countryCode": "GN",
    "slug": "guinea"
  },
  {
    "country": "Guinea-Bissau",
    "touristRoute": "VoA / eVisa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "GW",
    "slug": "guinea-bissau"
  },
  {
    "country": "Guyana",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "GY",
    "slug": "guyana"
  },
  {
    "country": "Haiti",
    "touristRoute": "Visa-free / entry conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "HT",
    "slug": "haiti"
  },
  {
    "country": "Honduras",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "HN",
    "slug": "honduras"
  },
  {
    "country": "Hungary",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "HU",
    "slug": "hungary"
  },
  {
    "country": "Iceland",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "IS",
    "slug": "iceland"
  },
  {
    "country": "India",
    "touristRoute": "Not applicable for Indian citizens",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "IN",
    "slug": "india"
  },
  {
    "country": "Indonesia",
    "touristRoute": "eVisa / e-VOA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "ID",
    "slug": "indonesia"
  },
  {
    "country": "Iran",
    "touristRoute": "VoA after prior online submission / visa route",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Middle East",
    "countryCode": "IR",
    "slug": "iran"
  },
  {
    "country": "Iraq",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "IQ",
    "slug": "iraq"
  },
  {
    "country": "Ireland",
    "touristRoute": "Short Stay C visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "IE",
    "slug": "ireland"
  },
  {
    "country": "Israel",
    "touristRoute": "eVisa / electronic authorisation route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "IL",
    "slug": "israel"
  },
  {
    "country": "Italy",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "IT",
    "slug": "italy"
  },
  {
    "country": "Jamaica",
    "touristRoute": "VoA / entry conditions",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method. Country",
    "region": "Americas",
    "countryCode": "JM",
    "slug": "jamaica"
  },
  {
    "country": "Japan",
    "touristRoute": "Short-Term Stay visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "JP",
    "slug": "japan"
  },
  {
    "country": "Jordan",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Middle East",
    "countryCode": "JO",
    "slug": "jordan"
  },
  {
    "country": "Kazakhstan",
    "touristRoute": "eVisa / visa-free exemptions may apply by condition",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "KZ",
    "slug": "kazakhstan"
  },
  {
    "country": "Kenya",
    "touristRoute": "eTA",
    "coreChecklist": [
      "Passport",
      "online authorisation",
      "travel details",
      "accommodation/return ticket",
      "payment",
      "any health/identity questions."
    ],
    "indicativeProcessing": "Often electronic and relatively fast; allow several days before travel.",
    "feeHandling": "Electronic authorisation fee varies; verify official portal before collection.",
    "region": "Africa",
    "countryCode": "KE",
    "slug": "kenya"
  },
  {
    "country": "Kiribati",
    "touristRoute": "VoA / entry conditions",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "KI",
    "slug": "kiribati"
  },
  {
    "country": "Kuwait",
    "touristRoute": "eVisa / sponsor route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "KW",
    "slug": "kuwait"
  },
  {
    "country": "Kyrgyzstan",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "KG",
    "slug": "kyrgyzstan"
  },
  {
    "country": "Laos",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "LA",
    "slug": "laos"
  },
  {
    "country": "Latvia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "LV",
    "slug": "latvia"
  },
  {
    "country": "Lebanon",
    "touristRoute": "Visa / conditional VoA rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Middle East",
    "countryCode": "LB",
    "slug": "lebanon"
  },
  {
    "country": "Lesotho",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "LS",
    "slug": "lesotho"
  },
  {
    "country": "Liberia",
    "touristRoute": "Visa / eVisa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "LR",
    "slug": "liberia"
  },
  {
    "country": "Libya",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "LY",
    "slug": "libya"
  },
  {
    "country": "Liechtenstein",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "LI",
    "slug": "liechtenstein"
  },
  {
    "country": "Lithuania",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "LT",
    "slug": "lithuania"
  },
  {
    "country": "Luxembourg",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "LU",
    "slug": "luxembourg"
  },
  {
    "country": "Madagascar",
    "touristRoute": "VoA / eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "MG",
    "slug": "madagascar"
  },
  {
    "country": "Malawi",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "MW",
    "slug": "malawi"
  },
  {
    "country": "Malaysia",
    "touristRoute": "eVisa / visa-free policy currently subject to date/conditions",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "MY",
    "slug": "malaysia"
  },
  {
    "country": "Maldives",
    "touristRoute": "Visa-free/arrival permit",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "MV",
    "slug": "maldives"
  },
  {
    "country": "Mali",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "ML",
    "slug": "mali"
  },
  {
    "country": "Malta",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "MT",
    "slug": "malta"
  },
  {
    "country": "Marshall Islands",
    "touristRoute": "VoA / entry rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "MH",
    "slug": "marshall-islands"
  },
  {
    "country": "Mauritania",
    "touristRoute": "eVisa / VoA route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "MR",
    "slug": "mauritania"
  },
  {
    "country": "Mauritius",
    "touristRoute": "Visa-free/entry permit for Indians subject to conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Africa",
    "countryCode": "MU",
    "slug": "mauritius"
  },
  {
    "country": "Mexico",
    "touristRoute": "Consular visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "MX",
    "slug": "mexico"
  },
  {
    "country": "Micronesia",
    "touristRoute": "Entry rules / visa-free conditions",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Oceania",
    "countryCode": "FM",
    "slug": "micronesia"
  },
  {
    "country": "Moldova",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Europe",
    "countryCode": "MD",
    "slug": "moldova"
  },
  {
    "country": "Monaco",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "MC",
    "slug": "monaco"
  },
  {
    "country": "Mongolia",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "MN",
    "slug": "mongolia"
  },
  {
    "country": "Montenegro",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "ME",
    "slug": "montenegro"
  },
  {
    "country": "Morocco",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "MA",
    "slug": "morocco"
  },
  {
    "country": "Mozambique",
    "touristRoute": "eVisa / VoA route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "MZ",
    "slug": "mozambique"
  },
  {
    "country": "Myanmar",
    "touristRoute": "eVisa / VoA route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "MM",
    "slug": "myanmar"
  },
  {
    "country": "Namibia",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "NA",
    "slug": "namibia"
  },
  {
    "country": "Nauru",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Oceania",
    "countryCode": "NR",
    "slug": "nauru"
  },
  {
    "country": "Nepal",
    "touristRoute": "Visa-free for Indian nationals; entry-document rules apply",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "NP",
    "slug": "nepal"
  },
  {
    "country": "Netherlands",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "NL",
    "slug": "netherlands"
  },
  {
    "country": "New Zealand",
    "touristRoute": "eVisa / Visitor Visa or NZeTA depending eligibility",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Electronic authorisation fee varies; verify official portal before collection.",
    "region": "Oceania",
    "countryCode": "NZ",
    "slug": "new-zealand"
  },
  {
    "country": "Nicaragua",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "NI",
    "slug": "nicaragua"
  },
  {
    "country": "Niger",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "NE",
    "slug": "niger"
  },
  {
    "country": "Nigeria",
    "touristRoute": "eVisa / prior approval route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "NG",
    "slug": "nigeria"
  },
  {
    "country": "North Korea",
    "touristRoute": "Consular visa / special restrictions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "KP",
    "slug": "north-korea"
  },
  {
    "country": "North Macedonia",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "MK",
    "slug": "north-macedonia"
  },
  {
    "country": "Norway",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "NO",
    "slug": "norway"
  },
  {
    "country": "Oman",
    "touristRoute": "eVisa / tourist visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "OM",
    "slug": "oman"
  },
  {
    "country": "Pakistan",
    "touristRoute": "Visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "PK",
    "slug": "pakistan"
  },
  {
    "country": "Palau",
    "touristRoute": "VoA / entry rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "PW",
    "slug": "palau"
  },
  {
    "country": "Palestine",
    "touristRoute": "Entry depends on crossing/Israel controls; verify case-by-case",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "PS",
    "slug": "palestine"
  },
  {
    "country": "Panama",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "PA",
    "slug": "panama"
  },
  {
    "country": "Papua New Guinea",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Oceania",
    "countryCode": "PG",
    "slug": "papua-new-guinea"
  },
  {
    "country": "Paraguay",
    "touristRoute": "Visa / entry rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "PY",
    "slug": "paraguay"
  },
  {
    "country": "Peru",
    "touristRoute": "Visa / consular route",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "PE",
    "slug": "peru"
  },
  {
    "country": "Philippines",
    "touristRoute": "Visa-free 14-day route under stated conditions; longer stays/other cases require visa",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Asia",
    "countryCode": "PH",
    "slug": "philippines"
  },
  {
    "country": "Poland",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting. Country",
    "region": "Europe",
    "countryCode": "PL",
    "slug": "poland"
  },
  {
    "country": "Portugal",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "PT",
    "slug": "portugal"
  },
  {
    "country": "Qatar",
    "touristRoute": "eVisa / VoA route depending current eligibility",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Middle East",
    "countryCode": "QA",
    "slug": "qatar"
  },
  {
    "country": "Romania",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "RO",
    "slug": "romania"
  },
  {
    "country": "Russia",
    "touristRoute": "eVisa / regional or unified eVisa eligibility",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "RU",
    "slug": "russia"
  },
  {
    "country": "Rwanda",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "RW",
    "slug": "rwanda"
  },
  {
    "country": "Saint Kitts and Nevis",
    "touristRoute": "VoA / eVisa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Americas",
    "countryCode": "KN",
    "slug": "saint-kitts-and-nevis"
  },
  {
    "country": "Saint Lucia",
    "touristRoute": "eVisa / VoA route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Americas",
    "countryCode": "LC",
    "slug": "saint-lucia"
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "touristRoute": "Visa-free / eVisa route depending current rule",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "VC",
    "slug": "saint-vincent-and-the-grenadines"
  },
  {
    "country": "Samoa",
    "touristRoute": "Entry permit/VoA",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "WS",
    "slug": "samoa"
  },
  {
    "country": "San Marino",
    "touristRoute": "Schengen access via Italy; verify entry rules",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "SM",
    "slug": "san-marino"
  },
  {
    "country": "Sao Tome and Principe",
    "touristRoute": "eVisa / entry rules",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "ST",
    "slug": "sao-tome-and-principe"
  },
  {
    "country": "Saudi Arabia",
    "touristRoute": "Tourist eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "SA",
    "slug": "saudi-arabia"
  },
  {
    "country": "Senegal",
    "touristRoute": "Visa-free / eVisa/entry rules depending current policy",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Africa",
    "countryCode": "SN",
    "slug": "senegal"
  },
  {
    "country": "Serbia",
    "touristRoute": "Visa-free/conditional exemptions; verify current rule",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Europe",
    "countryCode": "RS",
    "slug": "serbia"
  },
  {
    "country": "Seychelles",
    "touristRoute": "Travel Authorisation",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SC",
    "slug": "seychelles"
  },
  {
    "country": "Sierra Leone",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SL",
    "slug": "sierra-leone"
  },
  {
    "country": "Singapore",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "SG",
    "slug": "singapore"
  },
  {
    "country": "Slovakia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "SK",
    "slug": "slovakia"
  },
  {
    "country": "Slovenia",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "SI",
    "slug": "slovenia"
  },
  {
    "country": "Solomon Islands",
    "touristRoute": "VoA / entry rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "SB",
    "slug": "solomon-islands"
  },
  {
    "country": "Somalia",
    "touristRoute": "eVisa / visa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SO",
    "slug": "somalia"
  },
  {
    "country": "South Africa",
    "touristRoute": "Visitor visa / eVisa eligibility",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "ZA",
    "slug": "south-africa"
  },
  {
    "country": "South Korea",
    "touristRoute": "Short-term visa / eVisa route where applicable",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "KR",
    "slug": "south-korea"
  },
  {
    "country": "South Sudan",
    "touristRoute": "Consular/eVisa route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SS",
    "slug": "south-sudan"
  },
  {
    "country": "Spain",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "ES",
    "slug": "spain"
  },
  {
    "country": "Sri Lanka",
    "touristRoute": "ETA/eVisa/arrival route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Electronic authorisation fee varies; verify official portal before collection.",
    "region": "Asia",
    "countryCode": "LK",
    "slug": "sri-lanka"
  },
  {
    "country": "Sudan",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "SD",
    "slug": "sudan"
  },
  {
    "country": "Suriname",
    "touristRoute": "eVisa / online entry route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services. Country",
    "region": "Americas",
    "countryCode": "SR",
    "slug": "suriname"
  },
  {
    "country": "Sweden",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "SE",
    "slug": "sweden"
  },
  {
    "country": "Switzerland",
    "touristRoute": "Schengen C visa",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "CH",
    "slug": "switzerland"
  },
  {
    "country": "Syria",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "SY",
    "slug": "syria"
  },
  {
    "country": "Tajikistan",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "TJ",
    "slug": "tajikistan"
  },
  {
    "country": "Tanzania",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "TZ",
    "slug": "tanzania"
  },
  {
    "country": "Thailand",
    "touristRoute": "eVisa / tourist visa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "TH",
    "slug": "thailand"
  },
  {
    "country": "Timor-Leste",
    "touristRoute": "VoA / visa route",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Asia",
    "countryCode": "TL",
    "slug": "timor-leste"
  },
  {
    "country": "Togo",
    "touristRoute": "eVisa / entry route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "TG",
    "slug": "togo"
  },
  {
    "country": "Tonga",
    "touristRoute": "Entry permit / visa route",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Oceania",
    "countryCode": "TO",
    "slug": "tonga"
  },
  {
    "country": "Trinidad and Tobago",
    "touristRoute": "Visa-free / conditional entry",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Americas",
    "countryCode": "TT",
    "slug": "trinidad-and-tobago"
  },
  {
    "country": "Tunisia",
    "touristRoute": "VoA / visa route depending current conditions",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "TN",
    "slug": "tunisia"
  },
  {
    "country": "Turkey",
    "touristRoute": "eVisa if eligible; otherwise sticker visa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "TR",
    "slug": "turkey"
  },
  {
    "country": "Turkmenistan",
    "touristRoute": "Consular visa / invitation generally required",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "TM",
    "slug": "turkmenistan"
  },
  {
    "country": "Tuvalu",
    "touristRoute": "VoA / entry rules",
    "coreChecklist": [
      "Passport",
      "photo where required",
      "return/onward ticket",
      "hotel/accommodation",
      "funds",
      "arrival form",
      "visa fee/payment method; check whether prior online registration is mandatory."
    ],
    "indicativeProcessing": "Generally processed at arrival if eligible; airport/port processing and queue time vary. Some countries require prior online approval.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Oceania",
    "countryCode": "TV",
    "slug": "tuvalu"
  },
  {
    "country": "Uganda",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Africa",
    "countryCode": "UG",
    "slug": "uganda"
  },
  {
    "country": "Ukraine",
    "touristRoute": "eVisa / consular route",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "UA",
    "slug": "ukraine"
  },
  {
    "country": "United Arab Emirates",
    "touristRoute": "Tourist visa through sponsor/airline/agent",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "AE",
    "slug": "united-arab-emirates"
  },
  {
    "country": "United Kingdom",
    "touristRoute": "Standard Visitor visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Europe",
    "countryCode": "GB",
    "slug": "united-kingdom"
  },
  {
    "country": "United States",
    "touristRoute": "B1/B2 Visitor visa",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "US",
    "slug": "united-states"
  },
  {
    "country": "Uruguay",
    "touristRoute": "Visa / conditional exemptions",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "UY",
    "slug": "uruguay"
  },
  {
    "country": "Uzbekistan",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "UZ",
    "slug": "uzbekistan"
  },
  {
    "country": "Vanuatu",
    "touristRoute": "Visa-free/entry rules",
    "coreChecklist": [
      "Passport",
      "return/onward ticket",
      "accommodation",
      "sufficient funds",
      "immigration/health requirements. Visa-free does not mean document-free."
    ],
    "indicativeProcessing": "No pre-travel visa in the stated route; immigration processing occurs at entry.",
    "feeHandling": "No visa fee for the visa-free route; border/arrival taxes, travel authorisation or other charges may still apply.",
    "region": "Oceania",
    "countryCode": "VU",
    "slug": "vanuatu"
  },
  {
    "country": "Vatican City",
    "touristRoute": "Schengen visa via Italy/other Schengen route",
    "coreChecklist": [
      "Passport",
      "form",
      "photo",
      "travel medical insurance (minimum coverage per Schengen rules)",
      "return flight",
      "accommodation",
      "itinerary",
      "3–6 months bank statements",
      "employment/business proof",
      "cover letter",
      "biometrics",
      "previous travel evidence."
    ],
    "indicativeProcessing": "Normally 15 calendar days after a complete application; may extend up to 45 days in individual cases. Appointment wait is separate.",
    "feeHandling": "Government fee generally €90 for adults (current standard short-stay fee); service-centre charges extra. Verify before quoting.",
    "region": "Europe",
    "countryCode": "VA",
    "slug": "vatican-city"
  },
  {
    "country": "Venezuela",
    "touristRoute": "Visa / consular route",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Americas",
    "countryCode": "VE",
    "slug": "venezuela"
  },
  {
    "country": "Vietnam",
    "touristRoute": "eVisa",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Asia",
    "countryCode": "VN",
    "slug": "vietnam"
  },
  {
    "country": "Yemen",
    "touristRoute": "Consular visa / special rules",
    "coreChecklist": [
      "Passport",
      "application",
      "photo",
      "itinerary",
      "accommodation",
      "funds",
      "employment/business evidence",
      "invitation/sponsor documents where applicable."
    ],
    "indicativeProcessing": "Destination-specific; allow several working days to several weeks and check the relevant mission before filing.",
    "feeHandling": "Live fee required: government fee + biometrics (if any) + VFS/B LS/TLS/agent/service charges + courier/optional services.",
    "region": "Middle East",
    "countryCode": "YE",
    "slug": "yemen"
  },
  {
    "country": "Zambia",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "ZM",
    "slug": "zambia"
  },
  {
    "country": "Zimbabwe",
    "touristRoute": "eVisa / VoA",
    "coreChecklist": [
      "Passport bio page",
      "recent photo",
      "online form",
      "travel dates/entry point",
      "hotel/return ticket and financial/supporting documents if requested."
    ],
    "indicativeProcessing": "Often 2–7 working days, but destination-specific; apply early and do not rely on the shortest published time.",
    "feeHandling": "Arrival visa fee varies by nationality and visa type; verify official tariff and accepted payment method.",
    "region": "Africa",
    "countryCode": "ZW",
    "slug": "zimbabwe"
  }
];
