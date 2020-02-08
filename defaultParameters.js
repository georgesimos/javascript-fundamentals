const add = function(a, b = 2) {
  console.log(arguments);
  return a + b;
};

const sum = add(5);
console.log(sum);

// Old way ES5
const oldAdd = function(a, b) {
  b = b || 2; // if b is not exxist then assign to it, 2
  console.log(arguments);
  return a + b;
};

const oldSum = oldAdd(5);
