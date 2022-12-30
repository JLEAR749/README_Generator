// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
// fs.writeFile('index.html', htmlPageContent, (err) =>
// err ? console.log(err) : console.log('Successfully created index.html!')
// );
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => { 
            console.log(response)
            console.log(generateMarkdown(response))
         }).catch((err) => { console.log(err) })
}


// Function call to initialize app
init();
