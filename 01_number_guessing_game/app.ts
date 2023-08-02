import inquirer from "inquirer";

const systemGeneratedNumber = Math.floor(Math.random() * 10);

const answers: { guessNumber: number } = await inquirer.prompt([
	{
		type: "number",
		name: "guessNumber",
		message: "Write Your Guess b/w 1 to 10: ",
	},
]);

const { guessNumber } = answers;

if (guessNumber === systemGeneratedNumber) {
	console.log("You Guessed the Right Number \n You Win");
} else {
	console.log("Wrong Guess");
}

console.log(answers.guessNumber);
