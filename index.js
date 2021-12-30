// const fs = require("fs")
// const path = require("path")
const inquirer = require("inquirer")


function mainMenu(){
  inquirer.prompt([
    {
      type: "list",
      name: "",
      message: "What would you like to do?",
      choices: [""]
    },
  ]);
};