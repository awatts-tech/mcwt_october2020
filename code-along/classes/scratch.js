// // Pretend that console.log only takes in one argument

// // Create a function that taking any amount of arguments,
// // call console.log with each of those arguments?

// // console.log(thing1, thing2, thing3);

function consoleAll(...args) {
  // take in any amount of arguments
  // for ()
  // console.log()
  let response = args.reduce((prev, curr) => {
    return (prev += ` ${curr}`);
  });

  console.log(response);
}

// const thing1 = 1;
// const thing2 = 2;
// const thing3 = 3;

// // consoleAll(thing1, thing2, thing3);
// // console.log(thing1, thing2, thing3);

// const base = { name: "BJ", age: 27 };
// const base1 = { ...base, name: "Blair", profession: "Software Developer" };

// const { name, age } = base;
// console.log(name);
// console.log(age);



class GrandCircusStudent {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.skills = ['Programming', 'LinkedIn', 'Zoom'];
  }
  
  sayName() {
      console.log(this.name);
  }
}

class GrandCircusFEStudent extends GrandCircusStudent {
    constructor(name, age, location) {
        // Call the parent's constructor
        super(name, age, location);

        const frontEndSkills = ['HTML', 'CSS', 'JavaScript'];
        this.skills = [this.skills, ...frontEndSkills];
    }
}

console.log(new GrandCircusFEStudent('BJ', 25, 'Grand Rapids'));

class BankAccount {
 // 
}

class BankAccountWithFee extends BankAccount {
// BankAccount+ 
}

class Vehicle {
    // engine ,
    // wheels,
    // fuel level
}

class Car extends Vehicle {
    // 
}

class Semi extends Vehicle {
    // 
}
