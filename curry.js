const curry = fn => {
  return arg => {
    return arg2 => {
      return fn(arg, arg2);
    };
  };
};

const abc = function(a, b) {
  return [a, b];
};
const curried = curry(abc);

console.log(curried(1)(2));
