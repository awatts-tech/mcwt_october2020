// Declare a function
function isHungry() {
  return true; // the return value can be set to a variable
}
const hungry = isHungry();

// Declaring a function with multiple parameters
function count(start, end) {
  // use backticks to display variables in
  // your string
  console.log(`Starting at ${start}`);
  console.log(`Ending at ${end}`);
}

// arguments go in order
// 1 becomes `start` because it is first
// 10 becomes `end` because it is second
count(1, 10);

// Use for when you know how many times you are loop
const arr = [2, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  // arr.length is a known variable
  console.log(arr[i]); // use the index to access items in the array
}

// Use while when you loop until a condition is met
let randomNumber = 0;
while (x !== 50) {
  randomNumber = Math.floor(Math.random() * 50 + 1);
  console.log(x);
}

// If statements && vs ||
const thing1 = true;
const thing2 = false;
if (thing1 || thing2) {
  // executes if 1 is true
  console.log("OR");
}

if (thing1 && thing2) {
  // executes if both are true
  console.log("AND");
}

const thing3 = "yes"; // use 1 equals for setting variables
if (thing3 === "yes") {
  // use 3 equals for comparing
  console.log("YAS");
}

// Add to an array
const staff = [
  {
    name: "BJ",
    title: "Instructor",
  },
  { name: "Blair", title: "Instructor" },
];
staff.push({ name: "Tiia", title: "TA" });

// Find an object in an array
staff.find((person) => {
  person.title === "TA"; // { name: "Tiia", title: "TA" }
});

// To get the index, use findIndex
staff.find((person) => {
  person.title === "TA"; // { name: "Tiia", title: "TA" }
});

// Finding the maximum
let max = 0;

const numbers = [1, 3, 5, 45, 1];

for (number of numbers) {
  if (number > max) {
    max = number;
  }
}

// or

numbers.reduce(( item1, item2 ) => {
    if ( item1 > item2) {
        return item1;
    } else {
        return item2;
    }
});

// or 

let sorted = numbers.sort();
max = sorted[number.length - 1];

// See more examples of array methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
