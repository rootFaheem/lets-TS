// let & const
// var assing global var
var var1 = 20;
// assign va1 a number i.e. it's type
let var2 = 40;
console.log(var2);
var2 = 300;
console.log(var2);

// const
const level = 1000;
// we can't assign a value to const variable
// level = 2000
console.log(level);

// Block Score

function reset() {
    let var1 = "Hi There";
    console.log("inside reset(): ", var1);
}
reset();
console.log("outside reset(): ", var1);

// ****** Arrow Functions ******
console.log("ARROW FUNCTION");
// Normal way of writing function
const addNum = function(num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNum(20, 40));
// Arrow Function
const multiplyNum = (num1: number, num2: number) => num1 * num2;
console.log(multiplyNum(2, 4));

// variations
const greet = (): void => {
    console.log("Hello!");
};
greet();

const greetFriend = (friend: string): void => {
    console.log("Hello", friend);
};

greetFriend("Musk");
