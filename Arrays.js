var person = ["test"];
person.name = "Mrs. White";

var who = person.name;
var len = person.length;

console.log({ who, person, len });

console.log({
  array: typeof person === "array",
  object: typeof person === "object"
});
// What is an Array?
// Array is an object
