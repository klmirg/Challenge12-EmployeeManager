const inquirer = require("inquirer")
const connection = require("./db/connection");
const db = require("./db")

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
  db.findAllEmployees()
  .then(([rows])=>{
    let employees = rows;
    console.table(employees)
  })
  .then(()=> mainMenu());
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

function addDepartment (){
  inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the new department?"
    },
  ]).then(answers =>{
    const newDepartment = answers.departmentName
    departments.push(newDepartment)
    console.log('New department added!')
    mainMenu()
  })
}

function addRole(){
 db.findAllDepartments()
 .then(([rows])=>{
  let departments = rows;
  console.log(departments)
  const departmentChoices = departments.map(({ id, department_name })=>({
    name: department_name,
    value: id
  }))

  inquirer.prompt([
    {
      name: "job_title",
      message: "What is the name of the role?"
    },
    {
      name: "salary",
      message: "What is the salary of the role?"
    },
    {
      type: "list",
      name: "department_id",
      message: "What department does the role belong to?",
      choices: departmentChoices
    }
  ])
  .then(role=>{
    db.createRole(role)
    .then(()=> console.log(`Added ${role.job_title} to the database`))
    .then(()=> mainMenu())
  })
 })
}

function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "role_id",
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
 .then(function ({ first_name, last_name, role_id, employeeManager }) {
   let data = {first_name, last_name, role_id, employeeManager 
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