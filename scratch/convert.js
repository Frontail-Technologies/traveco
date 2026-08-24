const fs = require('fs');
const json = fs.readFileSync('src/data/destinations.json', 'utf8');
const content = `export type VisaRegion = 'Europe' | 'Asia' | 'Middle East' | 'Africa' | 'Americas' | 'Oceania';

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

export const destinations: VisaDestination[] = ${json};
`;
fs.writeFileSync('src/data/destinations.ts', content);
