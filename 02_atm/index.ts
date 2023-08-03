import inquirer from "inquirer";

interface InputType {
	userId: string;
	userPin: number;
	transactionType: string;
	amount: number;
	customamount: number;
}

const accountbalance = 5000;

const answers: InputType = await inquirer.prompt([
	{
		type: "input",
		name: "userId",
		message: "Kindly Enter Your Id: ",
	},
	{
		type: "number",
		name: "userPin",
		message: "Kindly Enter Your Pin: ",
	},
	{
		type: "list",
		name: "transactionType",
		choices: ["Balance Inquiry", "Cash Withdrawal"],
		message: "Kindly Select Transaction Type",
		when(answers) {
			return answers.userId && answers.userPin;
		},
	},
	{
		type: "list",
		name: "amount",
		choices: [1000, 2000, 5000, 10000, 20000, "Other Amount"],
		message: "Kindly Select Amount for Withdrawal",
		when(answers) {
			return answers.transactionType === "Cash Withdrawal";
		},
	},
	{
		type: "number",
		name: "customamount",
		message: "Enter Your Amount",
		when(answers) {
			return answers.amount === "Other Amount";
		},
	},
]);


if (answers.userId && answers.userPin) {
	const balance: number = 10000;
	const enteredAmount: number =
		typeof answers.amount == "number" ? answers.amount : answers.customamount;
	if (answers.transactionType == "Balance Inquiry") {
		console.log("Your Current Balance is ", balance);
	} else {
		if (balance >= enteredAmount) {
			const remainingBalance = balance - enteredAmount;
			console.log("Your Remaining Balance is : ", remainingBalance);
		} else {
			console.log("Insufficient Balance");
		}
	}
}

// console.log(answers);
