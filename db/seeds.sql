  -- Seeding the employeemanager database, with the tables and employee's for the tables
  INSERT INTO department (department_name)
VALUES
  ('Engineering'), 
  ('Finance'), 
  ('Legal'),
  ('Sales');

      INSERT INTO roles (job_title, salary, department_id)
VALUES
  ('Lawyer', 200000, 3),
  ('Lead Engineer', 75000, 1),
  ('Account Manager', 65000, 2),
  ('Legal Team Lead', 75000, 3),
  ('Software Engineer', 50000, 1),
  ('Salesperson', 45000, 4),
  ('Sales Lead', 50000, 4),
  ('Accountant', 75000, 2);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES   
  ('Ronya', 'Gettis', 1, 4),
  ('Giang', 'Nguyen', 2, null),
  ('Paige', 'Kleeberger', 3, null),
  ('Ana', 'Block', 4, null),
  ('Sofia', 'Nguyen', 5, 2),
  ('Rachel', 'Gettis', 6, 7),
  ('Erin', 'Kleeberger', 7, null),
  ('Paul', 'Erickson', 1, 4),
  ('Jon', 'Wertjes', 8, 3);


