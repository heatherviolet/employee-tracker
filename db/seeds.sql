USE tracker;

INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Engineering');
INSERT INTO department (name)
VALUES ('Finance');
INSERT INTO department (name)
VALUES ('Legal');

INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Salesperson', 'Sales', 80000, 2);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Lead Engineer', 'Engineering', 150000, 1);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Software Engineer', 'Engineering', 120000, 1);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Account Manager', 'Finance', 160000, 3);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Accountant', 'Finance', 125000, 3);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Legal Team Lead', 'Legal', 250000, 4);
INSERT INTO roles (job_title, department_role, salary, roles_id)
VALUES ('Lawyer', 'Legal', 190000, 4);

INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (1, 'Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe');
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (2, 'Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, null);
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (3, 'Kevin', 'Tupik', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez');
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (4, 'Kunal', 'Singh', 'Account Manager', 'Finance', 160000, null);
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (5, 'Malia', 'Brown', 'Accountant', 'Finance', 125000, 'Kuna; Singh');
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (6, 'Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, null);
INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, reporting_manager)
VALUES (7, 'Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd');
