import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "guessNumber",
        message: "Write Your Guess b/w 1 to 10: ",
    },
]);
const { guessNumber } = answers;
if (guessNumber === systemGeneratedNumber) {
    console.log("You Guessed the Right Number");
}
else {
    console.log("Wrong Guess");
}
console.log(answers.guessNumber);
