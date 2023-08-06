import inquirer from "inquirer";

class Person {
	personality: string;
	constructor() {
		this.personality = "Mystery";
	}
	AskQuestion(answer: number) {
		if (answer === 1) {
			this.personality = "Extrovert";
		} else if (answer === 2) {
			this.personality = "Introvert";
		} else {
			this.personality = "Mystery";
		}
	}
	GetPersonality() {
		return this.personality;
	}
}

class Student extends Person {
	private _name: string;
	constructor() {
		super();
		this._name = "";
	}
	get Name() {
		return this._name;
	}
	set Name(name: string) {
		this._name = name;
	}
}

const { num }: { num: number } = await inquirer.prompt([
	{
		type: "number",
		name: "num",
		message:
			"Type 1 if you like to talk to others and 2 if you would rather keep it to yourself: ",
	},
]);

const MyStudent = new Student();
MyStudent.AskQuestion(num);
console.log(`You are: ${MyStudent.GetPersonality()}`);

const { name }: { name: string } = await inquirer.prompt([
	{
		name: "name",
		message: "Enter Your Name: ",
	},
]);

MyStudent.Name = name;
console.log(
	`Your Name is: ${
		MyStudent.Name
	} and your personality is: ${MyStudent.GetPersonality()} `
);
