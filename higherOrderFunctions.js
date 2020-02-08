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
const increments = n => n + 1;

const square = n => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);

console.log(doMathSoIDontHaveTo(5, square), doMathSoIDontHaveTo(4, increments));
