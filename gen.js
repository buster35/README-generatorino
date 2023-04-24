const fs = require("fs")
const writeToFile = require("./index.js")
const fileName = "README.md"
module.exports = generateMarkdown

function generateMarkdown(data) {
  let licenseBadge = data.license
    switch (licenseBadge) {
      case "MIT":
        licenseBadge = `MIT![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`;
        break;
      case "GNU GPLv3": 
        licenseBadge = `GNU GPLv3![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`;
        break;
      default: "None";
        break;
    }

  let file = `# ${data.projectTitle}\n## Description\n${data.motivation}\n${data.whyBuild}\n${data.problemsSolved}\n${data.whatWasLearned}\n## Table of Contents:\n### [Instructions](/README.md/#instructions-instructions)\n### [Screenshots](/README.md/#screenshots-screenshots)\n### [Contributions](/README.md/#contributions-contributions)\n### [Tests](/README.md/#tests-tests)\n### [License](/README.md/#license-license)\n## Instructions{#instructions}\n${data.instructions}\n## Screenshots{#screenshots}\n${data.screenshot1}\n## Contributions{#contributions}\n${data.collaborators}\n${data.collaboratorsGithub}\n${data.thirdPartyAssets}\n${data.tutorials}\n## Tests{#tests}\n${data.tests}\n${data.testRun}\n## Questions{#questions}\nPlease direct any further questions to: ${data.userGithub} or ${data.email}\n## License{#license}\nThe license used for this project is ${licenseBadge}.\n`

  writeToFile(fileName, file)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

