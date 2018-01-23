var Person = require('./Person.js');

/**
 * This is a helper class to serialize and deserialize Person objects to and from data streams using the node Buffer class.
 */
module.exports = class PersonSerializationHelper {
    static toBuffer(person) {
        let buff = Buffer.alloc(this.length);
        buff.write(person.name);
        buff.writeUInt8(person.age, this.nameLength);
        buff.writeUInt8(this.getBitMask(person) , this.nameLength + 1);
        return buff;
    }

    // static toBuffer(personArray) {
    //     return Buffer.concat(personArray.map(x => this.toBuffer(x)));
    // }

    static getBitMask(person) {
        return (person.isDead ? this.IS_DEAD : 0) | (person.isSmart ? this.IS_SMART : 0) | (person.hasMuscles ? this.HAS_MUSCLES : 0); 
    }

    static from(buffer) {
        let name = buffer.toString('utf8', 0, this.nameLength).replace(/\0/g, '');
        let age = buffer.readUInt8(this.nameLength);
        let flags = buffer.readUInt8(this.nameLength + 1);
        let isDead = !!(flags & this.IS_DEAD);
        let isSmart = !!(flags & this.IS_SMART);
        let hasMuscles = !!(flags & this.HAS_MUSCLES);

        return new Person(name, age, isDead, isSmart, hasMuscles);
    }

    static arrayFrom(buffer) {
        var people = []
        var peopleCount = buffer.length / this.length;
        for (var i = 0; i < peopleCount; i++) {
            let sliceIndex = i * this.length;
            people.push(this.from(buffer.slice(sliceIndex, sliceIndex + this.length)));
        }
        return people;
    }

    static get nameLength() {
        return 20;
    }

    static get length() {
        return this.nameLength + 2; // age and other properties are 2 bytes
    }

    static get IS_DEAD() {
        return 1;
    }

    static get IS_SMART() {
        return 2;
    }

    static get HAS_MUSCLES() {
        return 4;
    }
 
}