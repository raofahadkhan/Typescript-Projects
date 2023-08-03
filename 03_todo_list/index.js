import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            meassage: "What do you want to add in your todo list",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false,
        },
    ]);
    const { todo, addmore } = answers;
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length) {
    console.log("===============");
    console.log("YOUR TODO LIST");
    console.log("===============");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
