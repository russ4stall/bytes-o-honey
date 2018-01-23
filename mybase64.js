var txtToEncode = "Russell";
//var txtToEncode = "This is some pretty kewl text if you axe me.";
var buf = Buffer.from(txtToEncode);
console.log(buf);
console.log(myBase64(txtToEncode));

function myBase64(s) {
    var charLib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";    
    var encodedString = pad = "";
    var padLen = 3 - (txtToEncode.length % 3);
    var buf = Buffer.alloc(txtToEncode.length + padLen);
    buf.write(s);

    for (var i=0; i<buf.length; i+=3) {
        let n = (buf[i] << 16) + (buf[i+1] << 8) + buf[i+2];
        encodedString += charLib[(n >>> 18) & 63] + charLib[(n >>> 12) & 63] + charLib[(n >>> 6) & 63] + charLib[n & 63];
    }

    for (var i=0; i < padLen; i++) { 
        pad += "=";
    }

    return encodedString.substring(0, encodedString.length - padLen) + pad;
}