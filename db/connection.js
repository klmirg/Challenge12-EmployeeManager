const mysql = require('mysql2');
const Sequelize = require('sequelize');

require('dotenv').config();

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // Your mySQL username,
//     user: 'root',
//     // Your MySQL password
//     password: '',

//     database: 'employeeManager'
//   },
// );

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  // port: 3306
});

module.exports = sequelize;
// module.exports = db;