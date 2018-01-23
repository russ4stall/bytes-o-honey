var base32 = require('./base32.js');

var s = "Hello mother";

var e = base32.encode("TACOSRULE");

console.log(e);

var c = s.charCodeAt(4);
console.log(c);
console.log(Buffer.from("o"));

var n = (c & 63);

console.log(c & 63);
console.log(c % 64);