const marked = require('marked');
const fs = require('fs');

const readMe = fs.readFileSync('./readme.md', 'utf-8');
const markdownReadMe = marked(readMe);

fs.writeFileSync('./public/generated/README.html', markdownReadMe);