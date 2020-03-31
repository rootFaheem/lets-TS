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
