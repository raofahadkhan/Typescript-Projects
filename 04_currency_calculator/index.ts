import inquirer from "inquirer";

interface CurrencyConversionType {
	PKR: {
		USD: number;
		GBP: number;
		PKR: number;
	};
	GBP: {
		USD: number;
		PKR: number;
		GBP: number;
	};
	USD: {
		PKR: number;
		GBP: number;
		USD: number;
	};
}
let convertion: CurrencyConversionType = {
	PKR: {
		USD: 0.004,
		GBP: 0.0037,
		PKR: 1,
	},
	GBP: {
		USD: 1.21,
		PKR: 350,
		GBP: 1,
	},
	USD: {
		PKR: 300,
		GBP: 0.83,
		USD: 1,
	},
};

interface InputType {
	from: "PKR" | "USD" | "GBP";
	to: "PKR" | "USD" | "GBP";
	amount: number;
}

const answers: {
	from: "PKR" | "USD" | "GBP";
	to: "PKR" | "USD" | "GBP";
	amount: number;
} = await inquirer.prompt([
	{
		type: "list",
		name: "from",
		choices: ["PKR", "USD", "GBP"],
		message: "Select Your Currency",
	},
	{
		type: "list",
		name: "to",
		choices: ["PKR", "USD", "GBP"],
		message: "Select Your Currency",
	},
	{
		type: "number",
		name: "amount",
		message: "Enter quantity you are wanted to Convert",
	},
]);

let { from, to, amount } = answers;

if (from && to && amount) {
	let result = convertion[from][to] * amount;
	console.log(`Your conversion from ${from} to ${to} is ${result}`);
} else {
	console.log("Enter Valid Inputs");
}
