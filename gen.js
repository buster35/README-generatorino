const fs = require("fs")
const writeToFile = require("./index.js")
const fileName = "README.md"
module.exports = {generateMarkdown, renderLicenseBadge}
import { appendFileSync } from "node:fs";

function generateMarkdown(data) {

  let file = `# ${data.projectTitle}\n## Description\n${data.motivation}\n${data.whyBuild}\n${data.problemsSolved}\n${data.whatWasLearned}\n## Table of Contents:\n### [Instructions](/README.md/#instructions-instructions)\n### [Screenshots](/README.md/#screenshots-screenshots)\n### [Contributions](/README.md/#contributions-contributions)\n### [Tests](/README.md/#tests-tests)\n### [License](/README.md/#license-license)\n## Instructions{#instructions}\n${data.instructions}\n## Screenshots{#screenshots}\n${data.screenshot1}## Contributions{#contributions}\n${data.collaborators}\n${data.collaboratorsGithub}\n${data.thirdPartyAssets}\n${data.tutorials}\n## Tests{#tests}\n${data.tests}\n${data.testRun}\n## Questions{#questions}\nPlease direct any further questions to: ${data.userGithub} or ${data.email}\n## License{#license}\nThe license used for this project is ${data.license}.\n`

  writeToFile(fileName, file)
}

function renderLicenseBadge(data) {//doesn't necessarily have to be part of the generateMarkdown function?//
  let licenseBadge = data.license
    switch (licenseBadge) {
      case "MIT":
        licenseBadge = `![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`;
        break;
      case "GNU GPLv3": 
        licenseBadge = `![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`;
        break;
      default: "None";
        break;
    }
    try {
    fs.appendFileSync("README.md", "licenseBadge")} catch (err) {}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
//the module.exports object allows these functions to be used in other files...

