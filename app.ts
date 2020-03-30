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
myRealAge = 22;
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
