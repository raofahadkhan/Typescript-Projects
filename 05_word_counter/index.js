import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence to Get the Word Count: ",
    },
]);
const words = answers.sentence.split(" ").filter((num) => num != "");
console.log(`Your sentence word count is ${words.length}`);
