const fs = require('fs');


fs.writeFileSync('text.txt', 'Hello World');
fs.copyFileSync('text.txt', 'text1.txt');

fs.renameSync('text.txt', 'renamed.txt');

const data = fs.readFileSync('text1.txt', { encoding: 'utf8', flag: 'r' });
console.log(data);