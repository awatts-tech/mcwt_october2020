// const age = 17;

// // let message = "I can ";
// // message += age >= 18 ? "" : "not";
// // message += " vote.";

// // console.log(message)

// const choice = "small";
// switch (choice) {
//   case "small":
//     console.log("You have ordered a small shirt");
//     break;
//   case "medium":
//     console.log("You have ordered a medium shirt");
//     break;
//   case "large":
//     console.log("You have ordered a large shirt");
//     break;
//   default:
//     console.log("We have no other sizes");
//     break;
// }

// console.log("done");

// // for (let i = 0; i <= 10; i++) {
// //     console.log(`${i}. `);
// // }

// for (let i = 1; i <= 100; i *= 2) {
//     console.log(`${i}.`);
// }

// const hungry = true;
// let pizzasInBelly = 6;

// do {
//     console.log("Eating pizza");
//     pizzasInBelly++;
// } while (pizzasInBelly < 6);

// while (pizzasInBelly < 6) {
//     console.log("Eating pizza");
//     pizzasInBelly++;
// }

const array = ["Kim", "Suguna", "Shannon", "April", "Liz"];

// for (let i = 0; i < array.length; i++) {
//     const anything = array[i];
//     console.log(anything);
// }

// for (const anything of array) {
//     console.log(anything);
// }

const colors = {
  black: "#000000",
  white: "#ffffff",
  gray: "#444444",
};

for (const color in colors) {
  console.log(color);
  console.log(colors[color]);
}
