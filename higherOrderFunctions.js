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
