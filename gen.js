const fs = require("fs")

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  `# ${data.projectTitle}"\n"## Description"\n" ${data.motivation}"\n"${data.whyBuild}"\n"${data.problemsSolved}"\n"${data.whatWasLearned}"\n"## Table of Contents:"\n"### [Instructions](#instructions)"\n"### [Screenshots](#screenshots)"\n"### [Contributions](#contributions)"\n"### [Tests](#tests)"\n"### [License](#license)"\n"## Instructions {#instructions}"\n"${data.instructions}"\n"## Contributions {#contributions}"\n"${data.collaborators}"\n"${data.collaboratorsGithub}"\n"${data.thirdPartyAssets}"\n"${data.tutorials}"\n"## Tests {#tests}"\n"${data.tests}"\n"${data.testRun}"\n"## Questions {#questions}"\n"Please direct any further questions to: ${data.userGithub} or ${data.email}"\n"`}

function renderLicenseBadge(license) {
    let license = "No license selected";
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
function includeLicense(license) {
  let licenseInfo = `## License {#license} "\n" The license used for this project is ${license.license}. "\n" `
}

//the module.exports object allows these functions to be used in other files...
module.exports = {
  generateMarkdown
};