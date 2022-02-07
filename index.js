const mysql = require('mysql2');
const inquirer = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');

// prompts questions
function promptQuestions(){
    return returninquirer.prompt ([
    {
        type: 'choices',
        name: 'list',
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
]).then(function (answer) {
    switch (answer.promptQuestions) {
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
}

// displays departments
function viewAllDepartments() {
    connectiom.query('SELECT * FROM department', function (err, res) {
        if (err) throw error;
        console.table(res);
        promptQuestions()
    });
};

// displays roles
function viewAllRoles() {
    connection.query('SELECT * FROM roles', function (err, res) {
    if (err) throw error;
    console.table(res);
    promptQuestions()
});
};

// displays employees
function viewAllEmployees() {
    connection.query('SELECT * FROM employee', function (err, res) {
    if (err) throw error;
    console.table(res);
    promptQuestions()
});
};

// add department
function addADepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?'
    }).then(answer)
}

// function initiates app

function init() {
    inquirer.prompt(promptQuestions)
    .then(function (userInput) {
        console.log(userInput)
    });
};

init();