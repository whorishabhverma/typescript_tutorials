"use strict";
const user = {
    firstName: "rishabh",
    lastName: "verma",
    email: "risabh@gmail.com",
    age: 20,
};
const arr = [
    { "name": "rishabh", "age": 42 },
    { "name": "gargi", "age": 18 },
    { "name": "heiie", "age": 32 },
    { "name": "kalia", "age": 11 },
];
const arr1 = arr.filter((user) => user.age > 18).map((data) => data.name);
console.log(arr1);
