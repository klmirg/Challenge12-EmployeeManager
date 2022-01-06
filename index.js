const inquirer = require("inquirer")
const connection = require("./db/connection");
const db = require("./db")
const cTable = require('console.table');

function viewDepartments (){
  db.findAllDepartments()
  .then(([rows])=>{
    let departments = rows;
    console.table(departments)
  })
  .then(()=> mainMenu());
}

function viewRoles () {
  db.findAllRoles()
  .then(([rows])=>{
    let roles = rows;
    console.table(roles)
  })
  .then(()=> mainMenu());
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
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"]
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
    } else if (userChoice.memberChoice === "Update Employee Role") {
      updateEmployeeRole();
    } else {
      console.log("Goodbye!")
    }
  })
};

function addDepartment (){
  inquirer.prompt([
    {
      type: "input",
      name: "department_name",
      message: "What is the name of the new department?"
    },
  ]).then(department =>{
    db.createDepartment(department)
    .then(()=> console.log(`Added ${department.department_name} to the database`))
    .then(()=> mainMenu())
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
  db.findAllRoles()
  .then(([rows])=>{
    let roles = rows;
    console.log(roles)
    const rolesChoices = roles.map(({ id, job_title })=>({
      name: job_title,
      value: id
    }))
    // const managerChoices = roles.map(({ }))
    
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
        choices: rolesChoices
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who is the employee's manager?",
        choices: ["Giang", "Paige", "Ana", "Erin", "None"]
      }
    ])
    .then(employee=>{
      db.createEmployee(employee)
      .then(()=> console.log( `Added ${employee.first_name} ${employee.last_name} to the database`))
      .then(()=> mainMenu())
    })
  })
};

function updateEmployeeRole(){
  db.findAllEmployees()
  .then(([rows])=>{
   let employees = rows;
   console.log(employees)
   const employeeChoices = employees.map(({ id, first_name })=>({
     name: first_name, 
     value: id
   }));
   console.log(employeeChoices)
   db.findAllRoles()
   .then(([rows]) => {
     let roles = rows;
     console.log(roles)
     const rolesChoices = roles.map(({ id, job_title })=>({
       name: job_title,
       value: id
     }))
     inquirer.prompt([
       {
         type: "list",
         name: "first_name",
         message: "Who is the employee that you would like to update?",
         choices: employeeChoices
        },
        {
          type: "list",
          name: "role_id",
          message: "Which new role would you like to assign them to?",
          choices: rolesChoices
        }
      ])
      .then(update=>{
        let test = employees.filter(person => person.id === update.first_name)
        console.log(test)
        db.updateEmployee(update)
        .then(()=> console.log(`Changed ${test[0].first_name}'s role.`))
        .then(()=> mainMenu())
      })
    })
  })
}


mainMenu();