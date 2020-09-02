/**
 * server-async.js
 * 
 * Running Instructions: node + Activity Monitor + Terminal
 *      1. Run this file with `node server-async` to start the server.
 *      2. Start Activity Monitor on the memory tab and search `node` to observe the process
 *      3. Go to Terminal and type `curl localhost:8000`
 * 
 *      Observe how the memory of the process spikes when running the curl command.
 * 
 *      This is because fs.readFile, while async and non-blocking
 *      will still buffer the entire contents of the big.txt file
 *      into memory before serving it to the response
 */

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big.txt', (err, data) => {
      res.end(data);
  });
});

server.listen(8000);