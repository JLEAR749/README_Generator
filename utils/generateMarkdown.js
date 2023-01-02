function renderQuestionSection(questions){
  console.log(questions)
  return `![questions]()`
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  console.log(license)
  if (license !== 'none'){
return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license === 'Apache' || license=== 'GPL'){
  return `(https://opensource.org/licenses/${license}-2.0)`
}
  if (license !== 'none'){
    return `(https://opensource.org/licenses/${license})`
}
return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
  return '## license'
  }
  return ''
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

### Installation
${data.installation}

### Usage
${data.usage}

### License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

### Contribution
${data.contribution}

### Tests
${data.Tests}

## GitHub Profile
${renderQuestionSection(data.GitHubProfile)}
${renderQuestionLink(data.GitHubProfile)}

## Email Address
${renderQuestionSection(data.EmailAddress)}
${renderQuestionLink(data.EmailAddress)}
`;
}

module.exports = generateMarkdown;