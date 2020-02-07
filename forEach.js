function createSuspectObject(name) {
  return {
    name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is : ", name);
    }
  };
}

const suspects = ["Miss Pink", "Mr. White", "Mr. Black", "Miss Blue"];
const suspectList = [];

suspects.forEach(suspect => suspectList.push(createSuspectObject(suspect)));

function logger(value) {
  console.log(value);
}

suspects.forEach(logger);

console.log(suspectList);

console.log("Custom forEach");
console.log("--------------");
// Custom forEach
const _ = {};
_.each = function(list, callback) {
  if (Array.isArray(list)) {
    // Loop through array
    for (let i = 0; i < list.length; i++) {
      // Calling the callbback with a list item
      callback(list[i], i, list); // item, index, self
    }
  } else {
    // object
    // Loop through object
    for (let key in list) {
      console.log(list[key]);
      callback(list[key], key, list); // item, key, self
    }
    // call the callbback with a list item
  }
};
_.each(suspects, logger);

console.log("--------------");
_.each(["george", "nancy", "marios"], function(name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

console.log("--------------");
_.each({ simos: "test", salam: "test2" }, function(item, key, list) {
  console.log(item, key, list);
});
