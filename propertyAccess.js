var person = [];
person.name = "Mrs. White"; // Assing by value

var who = person.name; // Assing by reference

person.name = "Mr. White";

console.log(who); // Looking the value on person.name
