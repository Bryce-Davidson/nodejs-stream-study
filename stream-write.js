const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i=0; i<= 1e6; i++) {
  file.write('Blah Blah Haha \n');
}

file.end();