const game = {};

game.murder = "??";

game["weapons"] = [
  { type: "leasers", location: "lab", power: 100 },
  { type: "knife", location: "bathroom", power: 70 },
  { type: "Bazuka", location: "living room", power: 100 }
];

game.characters = [{ name: "George" }, { name: "Scarlet" }, { name: "Nansy" }];
game.characters.push({ name: "Marios" });

console.log(game);
