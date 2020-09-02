const fs = require('fs');

const src = fs.createReadStream('./big.txt'); 
const end = fs.createWriteStream('./write.txt')

// GOTCHA:
// Even though this changes the path, it will still
// Only write to the ./write.txt
console.log(src.path);
src.path = './new.txt'
console.log(src.path);

// Hook into stream events
src.on('data', (chunk) => {
    console.log(chunk.toString())
})
