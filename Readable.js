/**
 * Readable.js
 * 
 * Running Instructions: Debug
 *      Run this code with a debugger putting breakpoints on EVERY line
 *      attempt to guess what the output on each line will be.
 * 
 * hint: keep an i out inside the interval when i = 8
 */

const stream = require('stream');

const st = stream.Readable({
    objectMode: true,
    read() {}
})

var i = 0;
console.log(st.readableFlowing) // >>> null
const id = setInterval(() => {
    i++;
    if(i===4)
        st.pause(); 
    if(i===8)
        // The resume will have to wait until the interval is cleared? How come?
        st.resume();
    console.log("isFlowing: ", st.readableFlowing, "i: ", i)
    if(i<=8) {
        st.push(`I am chunk number ${i}`)
        console.log(`...pushed: ${i}`)
    }
    else
        st.push(null)
    if(i===12)
        clearInterval(id);
}, 1500);

st.on('data', chunk => {
    console.log(chunk)
})

st.on('resume', chunk => {
    console.log("Stream has resumed.")  
})

st.on('pause', chunk => {
    console.log("stream has paused.")
})

st.on('end', chunk => {
    console.log('stream has ended.')
    st.pause();
})