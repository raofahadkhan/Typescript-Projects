import inquirer from "inquirer";

interface InputType {
	numberOne: number;
	numberTwo: number;
	operator: string;
}

const answers: InputType = await inquirer.prompt([
	{
		type: "number",
		name: "numberOne",
		message: "Enter First No: ",
	},
	{
		type: "number",
		name: "numberTwo",
		message: "Enter Second No: ",
	},
	{
		type: "list",
		name: "operator",
		choices: ["+", "-", "*", "/"],
		message: "Select Operator: ",
	},
]);

const { numberOne, numberTwo, operator } = answers;

if (numberOne && numberTwo && operator) {
	let result: number = 0;
	if (operator === "+") {
		result = numberOne + numberTwo;
	} else if (operator === "-") {
		result = numberOne - numberTwo;
	} else if (operator === "*") {
		result = numberOne * numberTwo;
	} else {
		result = numberOne / numberTwo;
	}
	console.log(result);
} else {
	console.log("Kindly Provide Valid Inputs");
}
