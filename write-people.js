const fs = require('fs');
const Person = require('./Person.js');
const PersonHelper = require('./PersonSerializationHelper.js');

var people = [];

people.push(new Person("Russell Forstall", 28, false, true, true));
people.push(new Person('Jay Forstall', 30, false, false, true));
people.push(new Person('Cindy Forstall', 58, false, true, false));
people.push(new Person('James Forstall', 63, false, false, false));
people.push(new Person('Michael Jackson', 50, true, false, false));

var buff = Buffer.concat(people.map(x => PersonHelper.toBuffer(x)));

fs.writeFileSync("people.txt", buff.toString('base64'));

console.log(buff);

