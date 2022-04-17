'use strict';
let speakVolume = prompt("This is a prompt");

console.log(speakVolume)

if (speakVolume.length > 0) {
    console.log('this is not an empty text')

    if (speakVolume === speakVolume.toUpperCase()) {
        console.log(`Original >> ${speakVolume}`);
        console.log(`Modified >> ${speakVolume.toUpperCase()}`);
        console.log("YELLING");
    } else if (speakVolume === speakVolume.toLowerCase()) {
        console.log(`Original >> ${speakVolume}`);
        console.log(`Modified >> ${speakVolume.toLowerCase()}`);
        console.log("quiet");
    } else {
        console.log("what")
    }

} else {
    alert('no')
}


// How I Test and solved it
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
// I used a lot of console.log to see how the if else statements changed depending on input