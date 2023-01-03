// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { emit } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README generator.   To start, please type your full name:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub Username.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the instructions for useage.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How others can contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license.',
        choices: ['none', 'MIT', 'Apache', 'GPL'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// TODO: Create a function to inintialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
            console.log(response)
            writeToFile('/generatedREADME/README.md', generateMarkdown(response))
            console.log('Sucess! Your README is now under the generatedREADME file.')
        }).catch((err) => { console.log(err) })
}
// Function call to initialize app
init()
