const game = {
  suspects: [
    { name: "George", color: "red" },
    { name: "Marios", color: "green" }
  ]
};

function foo() {
  const { suspects } = game;
  //   for (let i = 0; i < suspects.length; i++) {
  //     console.log(suspects[i].name);
  //   }
  suspects.forEach(({ name, color }) =>
    console.log(`name is ${name} and color is ${color}`)
  );
}
for (let key in game) {
  const users = game[key].map(user => ({ ...user, suspect: true }));
  console.log(users);
}

foo();
