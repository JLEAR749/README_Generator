// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const path = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
    type:'input',
    name:'description',
    message: 'Please type in a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please write installation instruction.'
    },
    {
        type:'input',
        name: 'usage',
        message: 'Please provide instructions and examples so users can use the project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license.',
        choices: ['none','MIT','APACHE','GNU']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }
// fs.writeFile('index.html', htmlPageContent, (err) =>
// err ? console.log(err) : console.log('Successfully created index.html!')
// );
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => { 
            console.log(response)
            writeToFile('text.md', generateMarkdown(response))
         }).catch((err) => { console.log(err) })
}


// Function call to initialize app
init();
