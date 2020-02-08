// Takes a function as an input (arguments) and Returns a functios as an output

// CallBBacks
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
};

const result = ifElse(
  true,
  () => console.log(true),
  () => console.log(false)
);
console.log(result());

// Passing Arguments
var increments = function(n) {
  return n + 1;
};

var square = function(n) {
  return n * n;
};

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
};
console.log(doMathSoIDontHaveTo(5, square), doMathSoIDontHaveTo(4, increments));
