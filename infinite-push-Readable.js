/**
 * infinite-push-Readable.js
 * 
 * Running Instructions: Activity Monitor
 *      Run this code with Activity Monitor showing the "memory" tab.
 *      Search `node` in the memory tab to show the process.
 *      
 *      Run the file with `node infinite-push-Readable.js`
 *      Observe how pushing to a Readable stream without aleviating
 *      it of it's contents creates an ever growing buffer and begins to
 *      blow the systems memory.
 * 
 *      This is why when creating a readable stream you usually read from
 *      a chunk of data on disk.
 * 
 */

const stream = require('stream');
const fs = require('fs');

const st = stream.Readable({
    objectMode: true,
    read() {}
})

var i = 0;
const id = setInterval(() => {
    console.log("Iteration: ", i)
    if(i%10===0)
        console.log("isFlowing: ", st.readableFlowing)
    if(i===20)
        clearInterval(id);
    fs.readFile('./big.txt', (err, data) => {
        st.push(data);
    })
    console.log("isReadable: ", st.readable)
    console.log("readableLength: ", st.readableLength)
}, 300)