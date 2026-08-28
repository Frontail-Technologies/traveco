const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Regex replacements
const replacements = [
  // Backgrounds
  { from: /bg-\[\#F8F5EE\]/g, to: 'bg-background' },
  { from: /bg-\[\#F7F5EF\]/g, to: 'bg-background' },
  { from: /bg-\[\#F9F9F8\]/g, to: 'bg-muted' },
  { from: /bg-\[\#FAF9F6\]/g, to: 'bg-surface' },
  { from: /bg-\[\#FBF7EE\]/g, to: 'bg-muted' },
  { from: /bg-\[\#0B1F3A\]/g, to: 'bg-navy' },
  { from: /bg-\[\#122A4A\]/g, to: 'bg-navy/90' },
  { from: /bg-traveco-navy/g, to: 'bg-navy' },
  { from: /bg-gold-cta/g, to: 'bg-accent' },
  { from: /bg-\[\#C94A36\]/g, to: 'bg-accent' },
  { from: /bg-\[\#EBE6D8\]/g, to: 'bg-muted' },

  // Text colors
  { from: /text-\[\#5C6472\]/g, to: 'text-muted-foreground' },
  { from: /text-\[\#172033\]/g, to: 'text-foreground' },
  { from: /text-traveco-navy/g, to: 'text-navy' },
  { from: /text-gold-cta/g, to: 'text-accent' },
  { from: /text-traveco-gold/g, to: 'text-accent' },
  { from: /text-amber-[\d]+/g, to: 'text-accent' },
  { from: /text-yellow-[\d]+/g, to: 'text-accent' },
  { from: /text-gray-[\d]+/g, to: 'text-muted-foreground' },
  { from: /text-slate-[\d]+/g, to: 'text-muted-foreground' },
  { from: /text-zinc-[\d]+/g, to: 'text-muted-foreground' },
  { from: /text-neutral-[\d]+/g, to: 'text-muted-foreground' },

  // Borders
  { from: /border-\[\#E7DED0\]/g, to: 'border-border' },
  { from: /border-\[\#FBF7EE\]/g, to: 'border-border' },
  { from: /border-gold-cta/g, to: 'border-accent' },
  { from: /border-traveco-navy/g, to: 'border-navy' },
  { from: /border-amber-[\d]+/g, to: 'border-accent' },
  { from: /border-yellow-[\d]+/g, to: 'border-accent' },
  { from: /border-gray-[\d]+/g, to: 'border-border' },
  { from: /border-slate-[\d]+/g, to: 'border-border' },

  // Rings
  { from: /ring-gold-cta/g, to: 'ring-accent' },
  { from: /ring-traveco-navy/g, to: 'ring-navy' },

  // Hovers
  { from: /hover:text-gold-cta/g, to: 'hover:text-accent' },
  { from: /hover:bg-gold-cta/g, to: 'hover:bg-accent' },
  { from: /hover:border-gold-cta/g, to: 'hover:border-accent' },

  // Custom properties
  { from: /--traveco-gold/g, to: '--traveco-accent' },
  { from: /--traveco-navy/g, to: '--traveco-primary' },
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const replacement of replacements) {
        content = content.replace(replacement.from, replacement.to);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

walk(srcDir);
console.log('Done replacing theme tokens.');
