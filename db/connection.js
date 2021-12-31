const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your mySQL username,
    user: 'root',
    // Your MySQL password
    password: '102206Jeremiah!',
    database: 'employeeManager'
  },
);

module.exports = db;