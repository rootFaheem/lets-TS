// Q. Convert this js code to TS
// let banAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
// let myself = {
//     name: "Elon",
//     bankAccount: bankAccount,
//     hobbies: ["Coding", "Space"]
// };
// myself.bankAccount.deposit(30000);
// console.log(myselft);

// Solution
let bankAccount: { money: number; deposit: (val: number) => void } = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};
let myself = {
    name: "Elon",
    bankAccount: bankAccount,
    hobbies: ["coding", "Space"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
