const fs = require('fs');
const server = require('http').createServer();

// How you can respond to an http-request using a stream
server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.txt');
  src.pipe(res);
});

server.listen(8000);