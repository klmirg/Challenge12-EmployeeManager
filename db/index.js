const connection = require("./connection");

class DB {
  constructor(connection){
    this.connection = connection;
  }

  findAllEmployees(){
    return this.connection.promise().query(
      "SELECT employee.*, roles.job_title AS title, roles.salary, department.department_name AS department FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id;"
    )
  }

  findAllDepartments(){
    return this.connection.promise().query(
      "SELECT * FROM department"
    )
  }

  findAllRoles(){
    return this.connection.promise().query(
      "SELECT roles.*, department.department_name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id"
    )
  }

  createRole(role){
    return this.connection.promise().query(
      "INSERT INTO roles SET ?", role
    )
  }

  createDepartment(department){
    return this.connection.promise().query(
      "INSERT INTO department SET ?", department
    )
  }
  
  createEmployee(employee){
    return this.connection.promise().query(
      "INSERT INTO employee SET ?", employee
    )
  }

  updateEmployee(update){
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?", [update.role_id, update.first_name]
    )
  }

}

module.exports = new DB(connection)