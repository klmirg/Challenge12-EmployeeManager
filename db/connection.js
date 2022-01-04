const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // Your mySQL username,
    user: 'root',
    // Your MySQL password
    password: process.env.DB_PW,
    database: 'employeemanager'
  },
);

module.exports = connection;