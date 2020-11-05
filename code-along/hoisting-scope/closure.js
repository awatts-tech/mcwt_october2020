"use strict";

// Closure example
// function Character(name) {
//   let health = 100;

//   function stateName() {
//     console.log(`${name} has ${health} health`);
//   }

//   console.log(health); // 3
//   stateName();
// }

// let health = 4;
// console.log(health); // before
// Character("BJ");
// console.log(health); // after

// function sayHello(name) {
//     const greeting = function(message) {
//       return `${message} ${name}?`;
//     }
//     return greeting;
//   }

//   let hiAdam = sayHello("Adam");
//   console.log(hiAdam("How are you"));

//   let hiYasmine = sayHello("Yasmine");
//   console.log(hiYasmine("How are you"));

//   let hiDavid = sayHello("David");
//   console.log(hiDavid("How are you"));

// DRY Don't Repeat Yourself

// 1. Create a function that returns HTML tags
function createHTML(tag, content) {
  return `<${tag} class="created-by-bj">  ${content} </${tag}>`;
}

console.log(createHTML("p", "Hello"));
// <p> Hello </p>

console.log(createHTML("h1", "My Name is BJ"));
// <h1> My Name is BJ </h1>

// 2. Use this to create a new function that
//    creates paragraphs
function createParagraph(content) {
  return createHTML("p", content);
}

function createBoilerPlate() {
  return createHTML(
    "html",
    createHTML(
      "body",
      createHTML("main", createHTML("h2", "Title") + createParagraph("Hello"))
    )
  );
}

console.log(createBoilerPlate());
console.log(createParagraph("Hello there"));
