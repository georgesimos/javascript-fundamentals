const createTuple = function(a, b, c, d) {
  console.log(arguments);
  return [
    [a, c],
    [b, d]
  ];
};
// [Arguments] {
//   '0': 'It',
//   '1': 'be',
//   '2': 'could',
//   '3': 'anyone',
//   '4': 'no one' }

const phrase = createTuple("It", "be", "could", "anyone", "no one");
// console.log(phrase);
