const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        type: "input",
        name: "projecttitle",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "Provie a step-by-step description of how to get the development environment running"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions and examples for use"
    },
    {
        type: "input",
        name: "contribution",
        message: "List your collaborators"
    },
    {
        type: "input",
        name: "test",
        message: "Provide examples on how to run the tests for application"
    },
    {
        type: "checkbox",
        name:"license",
        message: "Which of these license apply to you?",
        choices: ["MIT", "GNU GPLv3", "Apache", "Rust", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
])

.then((data) => {
    const filename = "README.md";
    fs.writeFile(
        filename,
`
# ${data.projecttitle}

# Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Test](#test)
*[GitHub](#github)
*[Email](#email)

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# Contribution
${data.contribution}

# Test
${data.test}

# GitHub
${data.github}

# Email
${data.email}
`,
(err) => (err ? console.log(err) : console.log("All set"))
    );
});