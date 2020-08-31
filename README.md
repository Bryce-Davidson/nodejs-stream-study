# Streams 101
---

There are four fundamental stream types in Node.js: 
Readable, Writable, Duplex, and Transform streams.

- A readable stream is an abstraction for a source from which data can be consumed. An example of that is the fs.createReadStream method.
- A writable stream is an abstraction for a destination to which data can be written. An example of that is the fs.createWriteStream method.
- A duplex streams is both Readable and Writable. An example of that is a TCP socket.
- A transform stream is basically a duplex stream that can be used to modify or transform the data as it is written and read. An example of that is the zlib.createGzip stream to compress the data using gzip. You can think of a transform stream as a function where the input is the writable stream part and the output is readable stream part. You might also hear transform streams referred to as “through streams.”

## References
---

[Nodejs Documentation](https://www.notion.so/Learn-about-nodejs-streams-f16424da12474be988afe2dc45934b30#1d8732a1812f43cbad12222cd9685dd6)
[Free Code Camp](https://www.notion.so/Learn-about-nodejs-streams-f16424da12474be988afe2dc45934b30#aab12fd4ab6047e28cffcab12206f4f3)
[Transform Streams](https://www.notion.so/Learn-about-nodejs-streams-f16424da12474be988afe2dc45934b30#b7023a0b6d6e4378b34fd26dab6b1e0e)