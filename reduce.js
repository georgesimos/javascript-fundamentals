const _ = {}; // like lodash

_.reduce = function(list, callback, initial) {
  let memo = initial;
  // Loop
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && !memo) {
      memo = list[0];
    } else {
      // call the callback
      // save the retun value
      memo = callback(list[i], memo); // memo is the previus value
    }
  }
  // return result
  return memo;
};

const mySum = _.reduce([1, 2, 3], (v, sum) => v + sum);
console.log(mySum);
