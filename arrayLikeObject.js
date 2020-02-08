const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("the billliards room?");
  return arr.join(" ");
};

const newArray = constructArr("was", "it", "in");
console.log(newArray);
