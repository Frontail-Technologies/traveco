const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('references/Global_Visa_Checklist_195_Countries_India_2026 (1).pdf');

pdf(dataBuffer).then(function(data) {
    // Write full text to a scratch file
    fs.writeFileSync('scratch/pdf_full_text.txt', data.text);
    console.log('PDF text written to scratch/pdf_full_text.txt');
    console.log('First 1000 characters:');
    console.log(data.text.substring(0, 1000));
}).catch(function(error) {
    console.error(error);
});
