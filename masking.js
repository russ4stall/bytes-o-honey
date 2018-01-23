const SUPER = 128;
const READ = 1;
const WRITE = 2;
const MODIFY = 4;
const ADMIN = 8;

const CAN_READ = 1 | SUPER;
const CAN_WRITE = 2 | SUPER;
const CAN_MODIFY = 4 | SUPER;
const CAN_ADMIN = 8 | SUPER;


var permSets = [3, 8, 7, 1, 2, 4, 5, 6, 128];

permSets.forEach((x, i) => {
    console.log(`User ${i}'s permissions..... `);
    console.log("CAN READ:   ", !!(x & CAN_READ));
    console.log("CAN WRITE:  ", !!(x & CAN_WRITE));
    console.log("CAN MODIFY: ", !!(x & CAN_MODIFY));
    console.log("CAN ADMIN:  ", !!(x & CAN_ADMIN));
    console.log("IS SUPER:   ", !!(x & SUPER));
});