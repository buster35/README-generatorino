// TODO:touch up wording in readme to reflect acceptance criteria
// TODO:code license badge into readme title so it displays near top
// TODO:get table of contents to jump to correct sections in readme
// TODO:make screen castify video

const fs = require("fs")
const writeToFile = require("./index.js")
const fileName = "README.md"
module.exports = generateMarkdown

function generateMarkdown(data) {
  let licenseBadge = data.license
  let licenseLink = data.license
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

  let file = `# ${data.projectTitle}${licenseBadge}\n## Description\n${data.motivation}\n${data.whyBuild}\n${data.problemsSolved}\n${data.whatWasLearned}\n## Table of Contents:\n### [Instructions](#instructions)\n### [Screenshots](#screenshots)\n### [Contributions](#contributions)\n### [Tests](#tests)\n### [License](#license)\n## Instructions\n${data.instructions}\n## Screenshots\n${data.screenshot1}\n## Contributions\n${data.collaborators}\n${data.collaboratorsGithub}\n${data.thirdPartyAssets}\n${data.tutorials}\n## Tests\n${data.tests}\n${data.testRun}\n## Questions\nPlease direct any further questions to: ${data.userGithub} or ${data.email}\n## License\nThe license used for this project is ${data.license}.\n`

  writeToFile(fileName, file)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

