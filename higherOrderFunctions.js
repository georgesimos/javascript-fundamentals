// Takes a function as an input (arguments) and Returns a functios as an output

// CallBBacks
// const ifElse = (condition, isTrue, isFalse) => {
//   return condition ? isTrue : isFalse;
// };

// const result = ifElse(
//   true,
//   () => console.log(true),
//   () => console.log(false)
// );
// console.log(result());

// Passing Arguments
const increments = n => n + 1;

const square = n => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);

console.log(doMathSoIDontHaveTo(5, square), doMathSoIDontHaveTo(4, increments));

// Another example

// const ifElse = (condition, isTrue, isFalse, p) => {
//   return condition ? isTrue(p) : isFalse(p);
// };
// const fn1 = p => console.log(p);
// const fn2 = p => console.log(p);
// ifElse(true, fn1, fn2, "hi");

const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(...args);
};
const fn1 = (...args) => console.log(...args);
const fn2 = (...args) => console.log(...args);
ifElse(true, fn1, fn2, "hi", "bye", "hola");
