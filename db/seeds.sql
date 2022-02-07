USE tracker;

INSERT INTO department (department_name)
VALUES ('Sales');
INSERT INTO department (department_name)
VALUES ('Engineering');
INSERT INTO department (department_name)
VALUES ('Finance');
INSERT INTO department (department_name)
VALUES ('Legal');

INSERT INTO roles (job_title, department_id, salary)
VALUES ('Sales Manager', 1 , 180000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Salesperson', 1 , 80000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Lead Engineer', 2, 150000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Software Engineer', 2, 120000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Account Manager', 3, 160000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Accountant', 3, 125000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Legal Team Lead', 4, 250000);
INSERT INTO roles (job_title, department_id, salary)
VALUES ('Lawyer', 4, 190000);


INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('John', 'Doe', 1, null);
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Mike', 'Chan', 1, 'John Doe');
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Ashley', 'Rodriguez', 2, null);
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Kevin', 'Tupik', 2, 'Ashley Rodriguez');
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Kunal', 'Singh', 3, null);
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Malia', 'Brown', 3, 'Kuna Singh');
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Sarah', 'Lourd', 4, null);
INSERT INTO employee (first_name, last_name, roles_id, reporting_manager)
VALUES ('Tom', 'Allen', 4, 'Sarah Lourd');
