const fs = require('fs');
const inquirer = require('inquirer');

// prompts questions
const promptQuestions = () => {
    inquirer.prompt ([
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