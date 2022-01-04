const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const connection = require("./db/connection")

const employees = [];

function viewDepartments (){

  // inquirer.prompt([
  //   {
  //     type: "list",
  //     name: "whichDepartment",
  //     message: "Which department would you like to see employees for?",
  //     choices: ["Engineering", "Finance", "Legal", "Sales"]
  //   }
  // ])
}

function viewRoles () {

}

function viewEmployees () {

}

function addDepartment (){
  inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the department?"
    },
  ]).then(answers =>{
    const department = new Department(answers.departmentName)
    employees.push(department)
    mainMenu()
  })
}

function mainMenu(){
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role" ]
    }
  ]).then(userChoice =>{
    if (userChoice.memberChoice === "View All Departments") {
      viewDepartments();
    } else if (userChoice.memberChoice === "View All Roles") {
      viewRoles();
    } else if (userChoice.memberChoice === "View All Employees") {
      viewEmployees();
    } else if (userChoice.memberChoice === "Add Department") {
      addDepartment();
    } else if (userChoice.memberChoice === "Add Role") {
      addRole();
    } else if (userChoice.memberChoice === "Add Employee") {
      addEmployee();
    } else {
      console.log(employees)
      updateEmployeeRole();
    }
  })
};

function addRole(){
  inquirer.prompt([
    {

    }
  ])
}

function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
    },
    {
      type: "list",
      name: "employeeManager",
      message: "Who is the employee's manager?",
      choices: ["Giang", "Paige", "Ana", "Erin", "None"]
    }
   ])
 .then(function ({ firstName, lastName, role, employeeManager }) {
   let data = {first_name: firstName, last_name: lastName, role_id: role, manager_id: employeeManager 
  }
    connection.query("INSERT INTO employee set ?", data, function (err, result) {
      if (err) throw err;
      console.log("Employee added!")
    });
  });
};

// .then(function ({ first_name, last_name, manager }) {
//   connection.query("INSERT INTO employee (first_name, last_name, manager) 
//        VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
//       if (err) throw err;
// })

mainMenu();