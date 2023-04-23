const fs = require("fs")
const writeToFile = require("./index.js")
const fileName = "README.md"
module.exports = generateMarkdown

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let file = `# ${data.projectTitle}"\n"## Description"\n" ${data.motivation}"\n"${data.whyBuild}"\n"${data.problemsSolved}"\n"${data.whatWasLearned}"\n"## Table of Contents:"\n"### [Instructions](#instructions)"\n"### [Screenshots](#screenshots)"\n"### [Contributions](#contributions)"\n"### [Tests](#tests)"\n"### [License](#license)"\n"## Instructions {#instructions}"\n"${data.instructions}"\n"## Contributions {#contributions}"\n"${data.collaborators}"\n"${data.collaboratorsGithub}"\n"${data.thirdPartyAssets}"\n"${data.tutorials}"\n"## Tests {#tests}"\n"${data.tests}"\n"${data.testRun}"\n"## Questions {#questions}"\n"Please direct any further questions to: ${data.userGithub} or ${data.email}"\n"## License {#license} "\n" The license used for this project is ${data.license}. "\n"`

  writeToFile(fileName, file)
}

function renderLicenseBadge(license) {//doesn't necessarily have to be part of the generateMarkdown function?//
    "No license selected";
    switch (license) {
      case "MIT": `![GitHub](https://img.shields.io/github/license/${license.userGithub}/README-generatorino)`;
        break;
      case "GNU GPLv3": `![GitHub](https://img.shields.io/github/license/${license.userGithub}/README-generatorino)`;
        break;
      default: "";
        break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
//the module.exports object allows these functions to be used in other files...

