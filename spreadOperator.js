const createTuple = (a, b, c, ...d) => [
  [a, c],
  [b, d]
];

const phrase = createTuple("It", "be", "could", "anyone", "no one");
console.log(phrase);
