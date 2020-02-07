const weapons = ["hammer", "gun", "bazzooka", "knife"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

const brokenWeapons = weapons.map(weapon => makeBroken(weapon));
console.log("is Array??? :", Array.isArray(brokenWeapons));
console.log(brokenWeapons);

// Custom map

const _ = {};

_.map = function(list, callback) {
  // Looping through list
  if (Array.isArray(list)) {
    const clone = [];
    for (let i = 0; i < list.length; i++) {
      clone.push(callback(list[i], i, list)); // element, index, self
    }
    return clone;
  }
};

console.log(
  _.map([1, 2, 3], function(el) {
    return el + 1;
  })
);
