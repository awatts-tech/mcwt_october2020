// Setting up Typescript:
// Command tsc --init

// Converting Typescript to JavaScript
// tsc

// Running JavaScript
// animal.ts
// node animal.js or node animal

// Interface

// Interfaces are contracts between developers, saying that a variable has to have the exact same properties as the interface, or it will cause an error. The purpose of this is to have higher quality code, and less run-time errors.
// Declaring an interface:
interface Person {
	firstName: string;
	over21: boolean;
}
// the left hand side is name of the property, the right side is the type.

// Types

// Types can be any primitive type, for example string, boolean, number. They can also be any interface or class, for example Date, or MyInterface.
const person: Person = { firstName: 'BJ', over21: true };
const person2: Person = { firstName: 'Shannon', over21: true };

// If your type is going to be an array of objects, use the sytax, TypeName[], for example
const people: Person[] = [
	person,
	person2,
	{
		firstName: 'Joker',
		over21: true,
	},
];

// Means the `data` variable is an array of objects that fit the MyInterface type.
// Variable Types
// To declare a variable as a type, put : Type after the variable name.
let batman: Person;

// You can also initialize your variable on the same line, for example:
let robin: Person = { firstName: 'Robin', over21: false };

// Function Types
function isOver21(person: Person): boolean {
	return person.over21;
}

// Classes
class SuperHero implements Person {
	// SuperHero class has to have the same values as a Person
	firstName: string = '';
	over21: boolean = false;
	isHero: boolean = true;

	fightCrime() {}
}

function fightCrime(hero: SuperHero) {
	console.log('Fighting crime with', hero);
}

// fightCrime(batman);
fightCrime(new SuperHero());

interface Bystander extends Person {
	firstName: string;
	over21: boolean;
	isHelpless: boolean;
}
