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
type BankAccount = { money: number; deposit: (val: number) => void };
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};
let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
    name: "Elon",
    bankAccount: bankAccount,
    hobbies: ["coding", "Space"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
