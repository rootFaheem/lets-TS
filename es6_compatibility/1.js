"use strict";
// let & const
// var assing global var
var var1 = 20;
// assign va1 a number i.e. it's type
var var2 = 40;
console.log(var2);
var2 = 300;
console.log(var2);
// const
var level = 1000;
// we can't assign a value to const variable
// level = 2000
console.log(level);
// Block Score
function reset() {
    var var1 = "Hi There";
    console.log("inside reset(): ", var1);
}
reset();
console.log("outside reset(): ", var1);
// ****** Arrow Functions ******
console.log("ARROW FUNCTION");
// Normal way of writing function
var addNum = function (num1, num2) {
    return num1 + num2;
};
console.log(addNum(20, 40));
// Arrow Function
var multiplyNum = function (num1, num2) { return num1 * num2; };
console.log(multiplyNum(2, 4));
// variations
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) {
    console.log("Hello", friend);
};
greetFriend("Musk");
