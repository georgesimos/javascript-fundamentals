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

console.log(suspectList);
