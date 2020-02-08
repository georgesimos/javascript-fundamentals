// const myAlert = () => {
//   const x = "Help! I think I found a clue!";
//   const alerter = () => {
//     console.log(x);
//   };

//   setTimeout(alerter, 1000);
//   console.log("what happens first? this log or the alert?");
// };

// myAlert();

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = () => {
    console.log(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert();
funcAlert();
funcAlert2(); // new context
