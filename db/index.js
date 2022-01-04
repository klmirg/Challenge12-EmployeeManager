const connection = require("./connection");

class DB {
  constructor(connection){
    this.connection = connection;
  }

  findAllEmployees(){
    return this.connection.promise().query(
      "SELECT * FROM employee"
    )
  }

  findAllDepartments(){
    return this.connection.promise().query(
      "SELECT * FROM department"
    )
  }

  findAllRoles(){
    return this.connection.promise().query(
      "SELECT * FROM roles"
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


}

module.exports = new DB(connection)