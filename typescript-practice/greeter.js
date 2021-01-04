"use strict";
const greeter = (user) => `Hello ${user.firstName + user.lastName} ${user.lastName}`;
const user = {
    firstName: 'BJ',
    lastName: 'Clark',
};
console.log(greeter(user));
const users = [1, 2];
