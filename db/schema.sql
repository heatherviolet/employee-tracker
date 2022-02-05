CREATE TABLE department (
    id INTERGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    roles_id INTERGER AUTO_INCREMENT PRIMARY,
    job_title VARCHAR(30) NOT NULL,
    department_role VARCHAR(30) NOT NULL,
    salary INTERGER(12) NOT NULL
);

CREATE TABLE employee (
    employee_id INTERGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTERGER(12) NOT NULL,
    reporting_manager VARCHAR(30)
);