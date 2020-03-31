// Q. Convert this js code to TS
let banAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Elon",
    bankAccount: bankAccount,
    hobbies: ["Coding", "Space"]
};

myself.bankAccount.deposit(30000);

console.log(myselft);
