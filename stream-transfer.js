const fs = require('fs');

const src = fs.createReadStream('./big.txt'); 
const end = fs.createWriteStream('./write.txt')


src.on('data', (chunk) => {
    console.log(chunk.toString())
    setTimeout(()=> {}, 1000)
})

src.pipe(end)
