const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/database.js');

// displays departments
function viewAllDepartments() {
        db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        init()
    });
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
    init()
});
};

// add department
function addADepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'departments',
        message: 'What is the name of the department?'
    }
    ).then(function (answer) {
        const departments = answer.departments
        db.query('INSERT INTO department (departments) VALUES ( ? )', departments, (err, res) => {
            if (err) throw err;

            console.log('Department: ' + departments);
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
        const role = answer.job_title;
        const roleSalary = answer.salary;
        const roleDepartment = answer.department_id;
        const query = `INSERT INTO roles (role, roleSalary, roleDepartment) VALUES ('${role}', '${roleSalary}', '${roleDepartment}')`;
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
]);
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