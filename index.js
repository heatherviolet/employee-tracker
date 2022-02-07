const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/database.js');

// displays departments
function viewAllDepartments() {
        db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        });
        init();
};

// displays roles
function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, res) {
    if (err) throw err;
    console.table(res);
    });
    init();
};

// displays employees
function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, res) {
    if (err) throw error;
    console.table(res);
    init();
});
};

// add department
function addADepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'departments',
        message: 'What is the name of the department?'
    }).then(function (answer) {
        const departments = answer.departments;
        const query = `INSERT INTO department (department_name) VALUES (department_name)' VALUES ('${departments}')`;
        db.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(answer);
            init();
        }); 
        
    });
}

// add a role
function addARole() {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'roleName',
            message: 'What is the name of the role?',
            validate: roleName => {
                if (roleName) {
                return true;
                } else {
                console.log('Please enter a role!');
                return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'roleSalary',
            message: 'What is the salary?',
            validate: roleSalary => {
                if (roleSalary) {
                return true;
                } else {
                console.log('Please enter a salary!');
                return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'roleDepartment',
            message: 'What is the role\'s department?',
            validate: roleDepartment => {
                if (roleDepartment) {
                return true;
                } else {
                console.log('Please enter a department!');
                return false;
                }
            }
        }, 
    ]).then(function(answer) {
        const job_title = answer.roleName;
        const salary = answer.roleSalary;
        const department_id = answer.roleDepartment;
        const query = `INSERT INTO roles (job_title, salary, department_id) VALUES ('${job_title}', '${salary}', '${department_id}')`;
        db.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(answer);
            init();
        });  
    });
}

// add employee
function addAnEmployee() {
    inquirer.prompt([
    {
        type: 'input', 
        name: 'firstName',
        message: 'What is the employee\'s first name?',
        validate: firstName => {
            if (firstName) {
            return true;
            } else {
            console.log('Please enter a first name!');
            return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'lastName',
        message: 'What is the employee\'s last name?',
        validate: lastName => {
            if (lastName) {
            return true;
            } else {
            console.log('Please enter a last name!');
            return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'employeeRole',
        message: 'What is the employee\'s role?',
        validate: employeeRole => {
            if (employeeRole) {
            return true;
            } else {
            console.log('Please enter a role!');
            return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'manager',
        message: 'What is the manager\'s name?'
    }, 
]).then(function(answer) {
    const first_name = answer.firstName;
    const last_name = answer.lastName;
    const roles_id = answer.employeeRole;
    const reporting_manager = answer.manager;
    const query = `INSERT INTO employee (first_name, last_name, roles_id, reporting_manager) VALUES ('${first_name}', '${last_name}', '${roles_id}', '${reporting_manager}')`;
    db.query(query, function (err, res) {
        if (err) {
            throw err;
        }
        console.log(answer);
        init();
    });     
});
}

// update employee role

function updateAnEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'eFirstName',
            message: 'What is the first name?',
            validate: eFirstName => {
                if (eFirstName) {
                return true;
                } else {
                console.log('Please enter a first name!');
                return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'eLastName',
            message: 'What is the last name?',
            validate: eLastName => {
                if (eLastName) {
                return true;
                } else {
                console.log('Please enter a last name!');
                return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'updateRole',
            message: 'What is the updated role ID?',
            validate: updateRole => {
                if (updateRole) {
                return true;
                } else {
                console.log('Please enter an updated role!');
                return false;
                }
            }
        }, 
    ]).then(function (answer) {
        const first_name = answer.first_name;
        const last_name = answer.last_name;
        const updateRole = answer.updateRole;
        const query = `UPDATE employee SET roles_id = ? WHERE first_name =,'${last_name}''`;
        db.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            console.table(answer);
            init();
        })
    });
    }

// function initiates app

function init() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments', 
                'View all roles',
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee',
                'Update an employee role']
        }
    ).then(function (answer) {
        switch (answer.choices) {
            case 'View all departments':
                viewAllDepartments();
            break;
        
            case 'View all roles':
                viewAllRoles();
            break;
    
            case 'View all employees':
                viewAllEmployees();
            break;
    
            case 'Add a department':
                addADepartment();
            break;
    
            case 'Add a role':
                addARole();
            break;
    
            case 'Add an Employee':
                addAnEmployee();
            break;
    
            case 'Update an employee role':
                updateAnEmployeeRole();
            break;
        }
        })
};

init();