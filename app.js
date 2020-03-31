"use strict";
// 1. Basic TYPES
var myName = "elon"; // similar to => let myName: string = "elon"
var myShoeSize = 8; // similar to => let myShoeSize: number = 8
var isGoodDeveloper = true; // similar to => let myName: boolean = true
//  what we can't do to above assigned values.
// myName = 2;
// myShoeSize = "Eight";
// isGoodDeveloper = 0;
// 2. Explicitly assigning
var myRealAge;
myRealAge = 48;
// myRealAge = "Twenty Two";
// 3. Array
var hobbies = ["development", "DevOps"];
hobbies[0] = 100;
console.log(typeof hobbies[0]);
// NEW TYPES ADDED WITH TYPESCRIPT
// 4. Tuples (an array with limited items each having a specific type and will remain the same type)
var myAddress = ["Silicon Valley", 22];
// 5. Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 20] = "Green";
    Color[Color["Blue"] = 21] = "Blue"; // 21
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// 6. any
var myFavouriteCar = "Tesla";
console.log("before:", myFavouriteCar);
myFavouriteCar = {
    name: "Tesla",
    model: "Y"
};
console.log("after:", myFavouriteCar);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello");
}
sayHello();
// arguments type
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 4));
// functions as type, args types order and their type matters
var myMultiply;
// can't do
// myMultiply = sayHello;
// can do
myMultiply = multiply;
console.log(myMultiply(2, 5));
// objects, order of keys doesnt't matter but type does
var userData = {
    name: "Elon",
    age: 48
};
// complex object
var complex1 = {
    data: [1000, 45.65, 543],
    output: function () {
        return this.data;
    }
};
// let complex2: Complex = {
//   data: [200, 453.542, 6224],
//   output: function(all: boolean): number[] {
//     return this.data;
//   }
// };
// union type (to have one of multiple types specified)
var myRealRealAge = 27;
myRealRealAge = "27";
// so, we can't assign boolean value
// myRealRealAge = true
// Type check
var finalValue = "A string";
if (typeof finalValue === "string") {
    console.log("It's a string");
}
else {
    console.log("Not a string");
}
// never
function neverReturn() {
    throw new Error("An error!");
}
// Null type
var canbeNull = 13;
canbeNull = null;
console.log(canbeNull);
