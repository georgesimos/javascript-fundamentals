const weapons = ["hammer", "gun", "bazzooka", "knife"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

const brokenWeapons = weapons.map(weapon => makeBroken(weapon));
console.log("is Array??? :", Array.isArray(brokenWeapons));
console.log(brokenWeapons);
