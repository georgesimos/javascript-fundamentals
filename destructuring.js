const [first, second] = [true, false]; // Creating values on the left ( Targets ) assign them from the right ( Source )
console.log(first, second);

const { one, two } = { one: 1, two: 2 };
console.log(one, two);

const obj = { name: "Rusty", room: "kitchen", weapon: "candlestick" };
const { room, weapon } = obj;
console.log(room, weapon);
