var s = "This is text that is over 76 characters. I'm trying real hard to write whatever comes to my mind. O Romeo, where for art thou Homeo? Right here bae! Open your eyes dumb bitch.";

var b = Buffer.from(s);
//process.stdout.write(b.toString('base64'));
process.stdout.write(base64_encode(s));

function base64_encode(s) {
    // the result/encoded string, the padding string, and the pad count
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var r = "";
    var p = "";
    var c = s.length % 3;

    // add a right zero pad to make this string a multiple of 3 characters
    if (c > 0) {
        for (; c < 3; c++) {
            p += '=';
            s += "\0";
        }
    }

    // increment over the length of the string, three characters at a time
    for (c = 0; c < s.length; c += 3) {

        // these three 8-bit (ASCII) characters become one 24-bit number
        var n = (s.charCodeAt(c) << 16) + (s.charCodeAt(c + 1) << 8) + s.charCodeAt(c + 2);

        // this 24-bit number gets separated into four 6-bit numbers
        n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];

        // those four 6-bit numbers are used as indices into the base64 character list
        r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]];
    }
    // add the actual padding string, after removing the zero pad
    return r.substring(0, r.length - p.length) + p;
}