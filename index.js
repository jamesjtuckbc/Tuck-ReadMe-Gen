const inquirer = require('inquirer');
const fs = require('fs');
const li = require('./li');

const year = new Date().getFullYear()
const ui = new inquirer.ui.BottomBar();

ui.log.write('add line breaks with <br/>')

inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'Your Name?',
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description?',
    },
    {
        type: 'input',
        name: 'instaInstr',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information?',
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'CC-0', 'BSD-3-Clause', 'WTFPL'],
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?',
    },
])
    .then((data) => {
        const filename = `./READMEs/${data.projectTitle}.md`;
        const userName = data.userName;
        const description = data.description;
        const instaInstr = data.instaInstr;
        const usage = data.usage;
        const contrib = data.contrib;
        const test = data.test;
        const license = data.license;
        const gitHub = data.gitHub;
        const email = data.email;
        const licenseBadge = li.choseBadge(license);
        const licenseText = li.choseLicense(license);
        const fileContent = `# ${data.projectTitle} README
${licenseBadge}
## Description

${description}

## Table of Contents

[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation

${instaInstr}

## Usage

${usage}

## License

This work is covered under ${licenseText}

## Contributing

${contrib}

## Tests

${test}

## Questions

Please reach-out to me on [GitHub](http://www.github.com/${gitHub}) or email me at: [${email}](mailto:${email})

---
© ${year} ${userName}`;

        fs.writeFile(filename, fileContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });


