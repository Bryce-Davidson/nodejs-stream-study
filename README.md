# Streams 101
There are four fundamental stream types in Node.js: 
Readable, Writable, Duplex, and Transform streams.

- A readable stream is an abstraction for a source from which data can be consumed. An example of that is the fs.createReadStream method.
- A writable stream is an abstraction for a destination to which data can be written. An example of that is the fs.createWriteStream method.
- A duplex streams is both Readable and Writable. An example of that is a TCP socket.
- A transform stream is basically a duplex stream that can be used to modify or transform the data as it is written and read. An example of that is the zlib.createGzip stream to compress the data using gzip. You can think of a transform stream as a function where the input is the writable stream part and the output is readable stream part. You might also hear transform streams referred to as “through streams.”