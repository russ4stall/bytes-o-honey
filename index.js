const fs = require('fs');
const Person = require('./Person.js');

var pBuff = Person.toBuffer([
    new Person("Russell Forstall", 28, false),
    new Person('Jay Forstall', 30, false),
    new Person('Cindy Forstall', 58, false),
    new Person('James Forstall', 63, false),
    new Person('Michael Jackson', 50, true)
]);

var peeps = Person.arrayFrom(pBuff);

console.log(peeps);