var person = [];
person.name = "Mrs. White";

var who = person.name;

person[0] = "First Element";
// We use brackets ([]) when we cannot use the dot (.)

// person[plea] = "what is this ???"; // Dude plea is not defined!!!
// when we don't use string ("") we should use an expression
person["plea"] = "what is this ???";
person["0"] = "0";
// console.log({ who, person });
console.log(person.plea, person["0"]);
// but we cannnot do this : person.0 (syntax error)

// So Array is type of Object with some array methods attach to it
