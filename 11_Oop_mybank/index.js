import inquirer from "inquirer";
import { Bank } from "./bank.js";
const Banking = async () => {
    let myAccount = new Bank(10000);
    let input;
    console.log(`Starting Balance ${myAccount.AccountBalance}`);
    console.log("Make a Debit Transaction");
    input = Number(await inquirer.prompt([
        { type: "number", name: "amount", message: "Enter Amount" },
    ]));
    console.log(typeof input);
    console.log(myAccount.Debit(input));
    console.log(`Make a Credit Transaction`);
    input = Number(await inquirer.prompt([
        { type: "number", name: "amount", message: "Enter Amount" },
    ]));
    console.log(typeof input);
    console.log(myAccount.Credit(input));
    console.log(`Your Final Account Balance is : ${myAccount.AccountBalance}`);
};
Banking();
