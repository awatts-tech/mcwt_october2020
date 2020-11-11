// Create an Animal with the following properties:
// Name: BJ
// Pockets: []
// Bells: 200
// HomeLoan: 2000

const animal = {
  name: "BJ",
  pockets: [200, "Hammer", "Book", { name: "T-rex", type: "fossil" }],
  bells: 400,
  homeLoan: 2000,
  displayName() {
    const { name } = this;
    console.log(`Hello! My name is ${name}`);
  },
};

console.log(Object.values(animal));

console.log("POCKETS BEFORE", animal.pockets);

const notebook = "Leather Notebook";
animal.pockets.push(notebook); // add to end
animal.pockets.unshift(notebook); // add to beginning

// const pockets = [animal.pockets, ...notebook] // add to end
// const pockets = [...notebook, animal.pockets] // add to beginning

// (index, how many to remove (can be 0), what you're putting in its place)
animal.pockets.splice(2, 0, notebook); // Add notebook to index 2, removing nothing
animal.pockets.splice(4, 1, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
animal.pockets.splice(4, 2, notebook); // Add notebook to index 4, removing remove one thing starting at index 4

console.log("POCKETS AFTER", animal.pockets);

// const item = animal.pockets.pop(); // take of the end, returns what it removed
// const item = animal.pockets.shift(); // take of the start, returns what it removed
// animal.pockets.splice(3, 1); // Remove 1 item, starting at index 3.
// NOTE: in splice, the third arg is optional :)

// console.log(item);
console.log("POCKETS AFTER", animal.pockets);

return;

// Print out the contents of the animal's bells
console.log(animal.bells);

// Create another animal with completely different properties
const animal1 = {
  name: "Tiia",
  pockets: [],
  bells: 300,
  homeLoan: 2000,
};
console.log(animal1.bells);

let name;

// console.log the name of the animal with the most bells?
if (animal.bells > animal1.bells) {
  name = animal.name;
} else if (animal1.bells > animal.bells) {
  name = animal1.name;
} else {
  name = "No one";
}

console.log(`${name} has more bells`);

// Change BJ's name to Bradley
animal.name = "Bradley";
console.log(animal);

animal.displayName();

// const car = {
//   speed: 0,
//   make: "Ford",
//   model: "Ranger",
//   year: 2019,
//   color: "blue",
//   isOn: false,
//   turnOn() {
//     this.isOn = true;
//   },
//   vroom() {
//     if (this.isOn) {
//       this.speed++;
//     } else{
//         console.log("Car no on. Car no vroom vroom.")
//     }
//   },
// };

// console.log(car.speed);
// car.turnOn();
// car.vroom();
// console.log(car.speed);
