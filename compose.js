const compose = (fn, fn2) => {
  return arg => {
    const result = fn2(arg);
    return fn(result);
  };
};

const consider = name => `I think it could be ... ${name}`;
const exclaim = statement => `${statement.toUpperCase()}!!!`;

const blame = compose(consider, exclaim);

console.log(blame("you"));
