// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateHTML = ({email,github})=>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">Email: ${email}</li></ul>
        </div>
      </header>
    </body>
    </html>`;
    

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
        choices: ['none','MIT','Apache','GPL']
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
 }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }
// fs.writeFile('index.html', htmlPageContent, (err) =>
// err ? console.log(err) : console.log('Successfully created index.html!')
// );
// TODO: Create a function to inintialize app
function init() {
    inquirer
        .prompt(questions).then((response) => { 
            console.log(response)
            writeToFile('./generatedREADME/README.md', generateMarkdown(response))
            .then(() => console.log('Successfully wrote to index.html'))
         }).catch((err) => { console.log(err) })
}
// Function call to initialize app
init();
