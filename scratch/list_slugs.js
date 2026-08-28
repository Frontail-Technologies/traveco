const fs = require('fs');
const content = fs.readFileSync('src/data/traveco-service-countries.ts', 'utf8');
const slugs = [];
const regex = /"?slug"?:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}
console.log(slugs.join(', '));
