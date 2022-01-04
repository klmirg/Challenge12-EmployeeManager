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

  createRole(role){
    return this.connection.promise().query(
      "INSERT INTO roles SET ?", role
    )
  }



}

module.exports = new DB(connection)