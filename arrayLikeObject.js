// const constructArr = function() {
//   const arr = Array.prototype.slice.call(arguments);
//   arr.push("the billliards room?");
//   return arr.join(" ");
// };

// const newArray = constructArr("was", "it", "in");
// console.log(newArray);

const constructArr = function() {
  const arr = Array.from(arguments); // Creating an array from arguments
  arr.push("the billliards room?");
  return arr.join(" ");
};

const newArray = constructArr("was", "it", "in");
console.log(newArray);

const _ = {};

_.from = array => Array.prototype.slice.call(array);
// _.from = (...array) => array;
// console.log(_.from("was", "it", "in"));
console.log(_.from("abcdefg"));
