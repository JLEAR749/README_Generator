// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache' || license === 'GPL') {
    return `(https://opensource.org/licenses/${license}-2.0)`
  }
  if (license !== 'none') {
    return `(https://opensource.org/licenses/${license})`
  }
  return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return '## license'
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Description 
  ${data.description}
  
  ### Installation
  ${data.installation}
  
  ### Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

### Contribution
${data.contributing}

### Tests
${data.tests}

## Questions
Have questions about this project? <br>

GitHub: https://github.com/${data.GitHub} <br>

Email: ${data.Email} <br>

## Credits
${data.name}
`;
}

module.exports = generateMarkdown;
