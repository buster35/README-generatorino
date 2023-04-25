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
        licenseBadge = `![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`
        licenseLink = "https://choosealicense.com/licenses/mit/#"
        break;
      case "GNU GPLv3": 
        licenseBadge = `![GitHub](https://img.shields.io/github/license/${data.userGithub}/README-generatorino)`
        licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
        break;
      default: "None"
        licenseBadge = ""
        licenseLink = ""
        break;
    }

  let file = `# ${data.projectTitle}${licenseBadge}\n## Description\n${data.motivation}\n${data.whyBuild}\n${data.problemsSolved}\n${data.whatWasLearned}\n## Table of Contents\n### [Installation](#installation)\n### [Usage](#usage)\n### [Screenshots](#screenshots)\n### [Contributions](#contributions)\n### [Tests](#tests)\n### [Questions](#questions)\n### [License](#license)\n## Installation\n${data.installationInstructions}\n## Usage\n${data.instructions}\n## Screenshots\n${data.screenshot1}\n## Contributions\n${data.collaborators}\n${data.collaboratorsGithub}\n${data.thirdPartyAssets}\n${data.tutorials}\n## Tests\n${data.tests}\n${data.testRun}\n## Questions\nPlease direct any further questions to: ${data.userGithub} or ${data.email}.\n## License\nThe license used for this project is ${data.license}: ${licenseLink}.\n`

  writeToFile(fileName, file)
}

