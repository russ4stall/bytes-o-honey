const fs = require('fs');
const PersonHelper = require('./PersonSerializationHelper.js');

var data = fs.readFileSync("people.txt", 'utf8');

var buff = Buffer.from(data, 'base64');

console.log(data);
console.log(buff);

var people = PersonHelper.arrayFrom(buff);
// var peopleCount = buff.length/Person.length;
// for(var i=0; i<peopleCount; i++) {
//     let sliceIndex = i * Person.length;
//     people.push(Person.from(buff.slice(sliceIndex, sliceIndex + Person.length)));
// }

console.log(people);