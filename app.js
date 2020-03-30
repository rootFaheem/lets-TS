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
myRealAge = 22;
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
