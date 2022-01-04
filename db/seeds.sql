  INSERT INTO employee (first_name, last_name, id, manager)
VALUES   
  ('Ronya', 'Gettis', 1, 'Ana Block'),
  ('Giang', 'Nguyen', 2, 'null'),
  ('Paige', 'Kleeberger', 3, 'null'),
  ('Ana', 'Block', 4, 'null'),
  ('Sofia', 'Nguyen', 5, 'Giang Nguyen'),
  ('Rachel', 'Gettis', 6, 'Erin Kleeberger'),
  ('Erin', 'Kleeberger', 7, 'null'),
  ('Paul', 'Erickson', 8, 'Ana Block'),
  ('Jon', 'Wertjes', 9, 'Paige Kleeberger');

  INSERT INTO role (job_title, salary, department_id)
VALUES
  ('Lawyer', 200000, 3),
  ('Lead Engineer', 75000, 1),
  ('Account Manager', 65000, 2),
  ('Legal Team Lead', 75000, 3),
  ('Software Engineer', 50000, 1),
  ('Salesperson', 45000, 4),
  ('Sales Lead', 50000, 4),
  ('Lawyer', 200000, 3),
  ('Accountant', 75000, 2);
  INSERT INTO department (department_name)
VALUES
  ('Engineering'), 
  ('Finance'), 
  ('Legal'),
  ('Sales');

