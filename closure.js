// const myAlert = () => {
//   const x = "Help! I think I found a clue!";
//   const alerter = () => {
//     console.log(x);
//   };

//   setTimeout(alerter, 1000);
//   console.log("what happens first? this log or the alert?");
// };

// myAlert();

// const myAlert = () => {
//   const x = "Help! I think I found a clue!";
//   let count = 0;
//   const alerter = () => {
//     console.log(`${x} ${++count}`);
//   };

//   return alerter;
// };

// const funcAlert = myAlert();
// const funcAlert2 = myAlert();
// funcAlert();
// funcAlert();
// funcAlert();
// funcAlert2(); // new context

// const newClue = name => {
//   const length = name.length;

//   return weapon => {
//     let clue = length + weapon.length;
//     return !!(clue % 2);
//   };
// };

// const didGreenDoItWith = newClue("Green");
// console.log(didGreenDoItWith("knife"));
// console.log(didGreenDoItWith("gun"));
// console.log(didGreenDoItWith("tv"));
// console.log("Wow he did it with a tv ...");

// function countClues() {
//   var n = 0;
//   return {
//     count: function() {
//       return ++n;
//     },
//     reset: function() {
//       return (n = 0);
//     }
//   };
// }

//ES6 equivalent

const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0)
  };
};

const counter = countClues();
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.reset());

// Closure Recipe
// Closure happens when you put a function inside in another function
// and you getting advantage of returning a function which still have access to his parents props even if it have been executed

// Create your parent function
function checkScope() {
  // define some variabbles in the parent's local scope
  var innerVar = "local scope";
  // define function inside the parent function. We call this a child
  function innerFunc() {
    return innerVar;
  }
  // return that function from inside the parent function
  return innerFunc;
}

// Execution part
var scope = "global scope";
function checkScope() {
  var innerVar = "local scope";
  function innerFunc() {
    return innerVar;
  }
  return innerFunc;
}
// run parents function and save to a variabble.
// this variable will hold whatever that function RETURNS
var test = checkScope();
// optional: check what that variables hold as its value. (hint. it should be the the inner function )
console.log(test);
// run the inner function
test();

const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };

  let who = "Why hello there, Prof Plum!";

  return speak;
};
const someoneSpeak = findSomeone();
someoneSpeak();
