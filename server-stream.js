/**
 * server-stream.js
 * 
 * Running Instructions: node + Activity Monitor + Terminal
 *      1. Run this file with `node server-async` to start the server.
 *      2. Start Activity Monitor on the memory tab and search `node` to observe the process
 *      3. Go to Terminal and type `curl localhost:8000`
 * 
 *      Observe how the memory of the process REMAINS STABLE <~30mb.
 * 
 *      This is because fs.createReadStream will buffer all of the contents
 *      of big.txt in small buffers as to not to blow the memory needed. The requester
 *      will still get all of the contents of the file.
 */

const fs = require('fs');
const server = require('http').createServer();

// How you can respond to an http-request using a stream
server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.txt');
  src.pipe(res);
});

server.listen(8000);