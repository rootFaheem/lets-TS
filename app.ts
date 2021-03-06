// 1. Basic TYPES
let myName = "elon"; // similar to => let myName: string = "elon"
let myShoeSize = 8; // similar to => let myShoeSize: number = 8
let isGoodDeveloper = true; // similar to => let myName: boolean = true

//  what we can't do to above assigned values.
// myName = 2;
// myShoeSize = "Eight";
// isGoodDeveloper = 0;

// 2. Explicitly assigning
let myRealAge: number;
myRealAge = 48;
// myRealAge = "Twenty Two";

// 3. Array
let hobbies: any[] = ["development", "DevOps"];
hobbies[0] = 100;
console.log(typeof hobbies[0]);

// NEW TYPES ADDED WITH TYPESCRIPT

// 4. Tuples (an array with limited items each having a specific type and will remain the same type)
let myAddress: [string, number] = ["Silicon Valley", 22];

// 5. Enum
enum Color {
    Gray, // 0
    Green = 20,
    Blue // 21
}
let myColor: Color = Color.Green;
console.log(myColor);

// 6. any
let myFavouriteCar: any = "Tesla";
console.log("before:", myFavouriteCar);

myFavouriteCar = {
    name: "Tesla",
    model: "Y"
};
console.log("after:", myFavouriteCar);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello");
}
sayHello();

// arguments type
function multiply(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiply(2, 4));

// functions as type, args types order and their type matters
let myMultiply: (val1: number, val2: number) => number;

// can't do
// myMultiply = sayHello;

// can do
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects, order of keys doesnt't matter but type does
let userData: { age: number; name: string } = {
    name: "Elon",
    age: 48
};

// complex object
let complex1: { data: number[]; output: () => number[] } = {
    data: [1000, 45.65, 543],

    output: function(): number[] {
        return this.data;
    }
};

// creating custom type
// type alias
type Complex = { data: number[]; output: (all: boolean) => number };

// let complex2: Complex = {
//   data: [200, 453.542, 6224],

//   output: function(all: boolean): number[] {
//     return this.data;
//   }
// };

// union type (to have one of multiple types specified)
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// so, we can't assign boolean value
// myRealRealAge = true

// Type check
let finalValue = "A string";
if (typeof finalValue === "string") {
    console.log("It's a string");
} else {
    console.log("Not a string");
}

// never
function neverReturn(): never {
    throw new Error("An error!");
}

// Null type
let canbeNull: number | null = 13;
canbeNull = null;

console.log(canbeNull);
