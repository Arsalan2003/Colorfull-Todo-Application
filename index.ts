#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist: string [] = [];
let conditions = true

console.log(chalk.blueBright.bold("\n \t Wellcome to Arsalan Javed - Todo-list Application\n"));

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add task", "Delete task", "Updated task", "View Todo-list", "Exit"],
                 

                }
            
        ]);
        if(option.choice === "Add task"){
            await addtask()
        }
        else if(option.choice === "Delete task"){
            await deletetask()
        }
        else if (option.choice === "Updated task"){
            await updatetask()
        }
        else if(option.choice === "View Todo-list"){
            await viewtask()
        }
        else if (option.choice === "Exit"){
            conditions = false
        }
        
    }
}

let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);

    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in Todo-List`);
}

//Function to view all Todo-List tasks
let viewtask = () => {
    console.log("\n Your Todo-List: \n");
    todolist.forEach((task, index) =>{
        console.log(`${index + 1}: ${task}`)
    })
}

//Function to delete a task from the list 
let deletetask = async () =>{
    await viewtask()
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
         
        }
    ]);
    let deletetask = todolist.splice(taskindex.index - 1, 1);
    console.log(`\n ${deletetask} this task has been deleted successfully from your Todo-List\n`)
}

//Function to update a task
let updatetask = async () => {
    await viewtask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name : ",
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully[for updated list check option: "View Todo-List"]`)
}




main();