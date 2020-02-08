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

const newClue = name => {
  const length = name.length;

  return weapon => {
    let clue = length + weapon.length;
    return !!(clue % 2);
  };
};

const didGreenDoItWith = newClue("Green");
console.log(didGreenDoItWith("knife"));
console.log(didGreenDoItWith("gun"));
console.log(didGreenDoItWith("tv"));
console.log("Wow he did it with a tv ...");
