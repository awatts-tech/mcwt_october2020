// Create an array of animals
const animals = [
  {
    name: "BJ",
    pockets: [200, "Hammer", "Book", { name: "T-rex", type: "fossil" }],
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  },
  {
    name: "Tiia",
    pockets: [200, "Hammer", "Book", { name: "T-rex", type: "fossil" }],
    bells: 500,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  },
  {
    name: "Blair",
    pockets: [200, "Hammer", "Book", { name: "T-rex", type: "fossil" }],
    bells: 600,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  },
];

// Sort the animals by first name
const animals1 = animals.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
});

console.log(animals1);
console.log("----------------");

// find the animal with 500 bells
console.log(
  animals.find(function (animal) {
    return animal.bells === 500;
  })
);

// equals
console.log(animals.find(animal => animal.bells === 500));

// equals
let found;
for (animal of animals) {
  if (animal.bells === 500) {
    found = animal;
  }
}

// equals
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];

  if (animal.bells === 500) {
    found = animal;
  }
}

console.log(found);
// Print out the names of each animals
