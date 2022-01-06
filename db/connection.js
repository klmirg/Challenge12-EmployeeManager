const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // My mySQL username.
    user: 'root',
    // My MySQL password that is being stored in a seperate file to keep it hidden. 
    password: process.env.DB_PW,
    database: 'employeemanager'
  },
);

module.exports = connection;