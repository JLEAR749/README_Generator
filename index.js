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
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name. You must credit yourself for your work');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('If someone has questions this is the best way to contact you.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub Username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Link your GitHub so other users are able to see your other work');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type in a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please write installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for usage to assist the user in being able to properly naviagate your project'
    },
    {
        type: 'list',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide instructions on how others can contribute to your project.')
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how others can contribut to your project',
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license.',
        choices: ['none', 'MIT', 'Apache', 'GPL'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },

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
            writeToFile('/generatedREADME/README.md', generateMarkdown(response))
        }).catch((err) => { console.log(err) })
}
// Function call to initialize app
init()
