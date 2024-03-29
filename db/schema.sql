DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
-- Creating the department table
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);
-- Creating the roles table
CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
-- Creating the employee table
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
  manager_id INTEGER
  );






