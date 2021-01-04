interface Person {
	firstName: string;
	lastName: string;
}

class Student implements Person {
    constructor(public firstName, public lastName) {}
}

const student = new Student("BJ", "Clark");

const greeter = (user: Student): string => `Hello ${user.firstName} ${user.lastName}`;

const user: Person = {
	firstName: 'BJ',
	lastName: 'Clark',
};

console.log(greeter(user));

const users: number[] = [1, 2];
