CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    roles_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    department_id INTEGER NOT NULL,
    salary DECIMAL NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY
    (department_id) REFERENCES department(id) 
    ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER NOT NULL,
    reporting_manager INTEGER,
    CONSTRAINT fk_roles FOREIGN KEY
    (roles_id) REFERENCES roles(roles_id)
    ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY
    (reporting_manager) REFERENCES employee(id)
    ON DELETE SET NULL 
);