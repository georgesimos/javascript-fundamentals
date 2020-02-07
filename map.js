const weapons = ["hammer", "gun", "bazzooka", "knife"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

const brokenWeapons = weapons.map(weapon => makeBroken(weapon));
console.log("is Array??? :", Array.isArray(brokenWeapons));
console.log(brokenWeapons);

// Custom map

const _ = {};

// _.map = function(list, callback) {
//   // Looping through list
//   if (Array.isArray(list)) {
//     const clone = [];
//     for (let i = 0; i < list.length; i++) {
//       clone.push(callback(list[i], i, list)); // element, index, self
//     }
//     return clone;
//   }
// };

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    // Loop through array
    for (let i = 0; i < list.length; i++) {
      // Calling the callbback with a list element
      callback(list[i], i, list); // element, index, self
    }
  } else {
    // object
    // Loop through object
    for (let key in list) {
      console.log(list[key]);
      callback(list[key], key, list); // value, key, self
    }
  }
};

_.map = function(list, callback) {
  // Looping through list with _.each
  const clone = [];
  _.each(list, function(value, index, list) {
    clone.push(callback(value, index, list));
  });

  return clone;
};

console.log(
  _.map([1, 2, 3], function(el) {
    return el + 1;
  })
);

// console.log(
//   _.map({ name1: "simos", name2: "nancy" }, function(el) {
//     return el;
//   })
// );
