/* 
===============================
=== Writing ES2015 Versions ===
===============================
 */

//Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//Computed Property Names
let favoriteNumber = 8;
const instructor = {
  fisrtName: "Steve",
  [favoriteNumber]: "Is my favy fav",
};

//Object Methods
const instructors = {
  firstName: "Steve",
  sayHi() {
    return "Hi";
  },
  sayBye() {
    return this.firstName + "" + " says bye!";
  },
};

//createAnimal function
const d = createAnimal("dog", "bark", "Woooof!");
d.bark();

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
s.bleet()

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
