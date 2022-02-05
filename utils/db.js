const fs = require('fs');
const inquirer = require('inquirer');

// creares an array of questions
const questions = [
    {
        type: 'choices',
        name: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update and employee role']
    },
    

]