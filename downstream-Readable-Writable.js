/**
 * downstream-Readable-Writable.js
 * 
 * Running Instructions: Console
 *      Run this code with `node downstream-Readable-Writable.js`
 * 
 *      This code is meant to display how a readable stream will
 *      begin flowing when the .pipe() function is called
 *      as well as the readable.on('data', chunk...) commmand is called.
 * 
 *      Observe how a readable stream can be flowing into a writable stream
 *      and we are able to push data onto the stream in order to have it
 *      flow down into the writable stream.
 * 
 */

const stream = require('stream');
const fs = require('fs');

const flow = new stream.Readable({
    objectMode: true,
    read() {}
})
const listener = fs.createWriteStream('./thing.txt');

var i = 0;
const id = setInterval(() => {
    i++;
    if(i<=3)
        flow.push(`I am chunk number ${i} just pushed onto the stream`)
    else {
        flow.push(null)
    }
    console.log("Still flowing: ", flow.readableFlowing);
    if(i==10)
        clearInterval(id);
}, 1000);

console.log("Flowing: ", flow.readableFlowing);

console.log("flow.on('data') has been called")
flow.on('data', chunk => {
    console.log(chunk)
    listener.write(chunk + "\n")
})

console.log("Flowing: ", flow.readableFlowing);

flow.on('end', chunk => {
    console.log('All data has been pushed onto the stream')
})