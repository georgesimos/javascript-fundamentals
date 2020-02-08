const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  }
];

const _ = {};

// _.filter = function(arr, cb) {
//   // Create a new array
//   const storage = [];
//   // Loop through array
//   for (let i = 0; i < arr.length; i++) {
//     // check if cb returns true
//     if (cb(arr[i], i, arr) === true) {
//       // if returns true, push into array
//       storage.push(arr[i]);
//     }
//   }
//   return storage;
//   // return array
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

_.filter = function(arr, cb) {
  // Create a new array
  const storage = [];
  // Loop through array
  _.each(arr, function(value, index, self) {
    // check if cb returns true
    if (cb(value, index, self) === true) {
      // if returns true, push into array
      storage.push(value);
    }
  });

  return storage;
  // return array
};
function isPresent(suspectObject) {
  return suspectObject.present;
}
const isPresentArray = _.filter(videoData, isPresent);
console.log(isPresentArray);
