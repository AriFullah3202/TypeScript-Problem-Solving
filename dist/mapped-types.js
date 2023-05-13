"use strict";
// javascript map funciton 
const arrayofNumber = [1, 2, 4];
const arrayOfString = arrayofNumber.map(number => number.toString);
function fullName(person) {
    return `his ${person.firstName} ${person.lastName}`;
}
const heello = fullName({ firstName: "idid", lastName: "lsl" });
console.log(heello);
