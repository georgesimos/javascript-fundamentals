const add = function(a, b = 2) {
  console.log(arguments);
  return a + b;
};

const sum = add(5);
console.log(sum);
