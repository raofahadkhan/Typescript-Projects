import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
}
const { num } = await inquirer.prompt([
    {
        type: "number",
        name: "num",
        message: "Type 1 if you like to talk to others and 2 if you would rather keep it to yourself: ",
    },
]);
const MyStudent = new Student();
MyStudent.AskQuestion(num);
console.log(`You are: ${MyStudent.GetPersonality()}`);
const { name } = await inquirer.prompt([
    {
        name: "name",
        message: "Enter Your Name: ",
    },
]);
MyStudent.Name = name;
console.log(`Your Name is: ${MyStudent.Name} and your personality is: ${MyStudent.GetPersonality()} `);
