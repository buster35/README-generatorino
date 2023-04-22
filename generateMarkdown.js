const fs = require("fs")



function createTitle (title) {
  let projectTitle = `# ${title.projectTitle} "\n"`
  console.log(projectTitle)
}

function createDescription (description) {
  let readmeDescription = `## Description "\n" ${description.motivation} "\n" ${description.whyBuild} "\n" ${description.problemsSolved} "\n" ${description.whatWasLearned} "\n"`
}

function tableOfContents () {
  let contents = '## Table of Contents: "\n" ### [Instructions](#instructions) "\n" ### [Screenshots](#screenshots) "\n" ### [Contributions](#contributions) "\n" ### [Tests](#tests) "\n" ### [License](#license) "\n"'
}

function createInstructions (instructions) {
  let readmeInstructions = `## Instructions {#instructions} "\n" ${instructions.instructions} "\n"`
}

function renderScreenshots () { //if/else statement to render screenshots if answer is "true"//

}

function includeCollaborators (collaborators) {
  let collaborators = `## Contributions {#contributions} "\n" ${collaborators.collaborators} "\n" ${collaborators.collaboratorsGithub} "\n" ${collaborators.thirdPartyAssets} "\n" ${collaborators.tutorials} "\n"`
}

function includeTests (tests) {
  let tests = `## Tests {#tests} "\n" ${tests.tests} "\n" ${tests.testRun} "\n"`
}

function includeQuestions (questions) {
  let contactInfo = `## Questions {#questions} "\n" Please direct any further questions to: ${questions.userGithub} or ${questions.email} "\n"`
}

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  createTitle (data)
  createDescription (data)
  createInstructions (data)
  renderScreenshots (data)
  includeCollaborators (data)
  includeTests (data)
  includeQuestions (data)
  includeLicense (data)
  renderLicenseBadge (data)
}

//the module.exports object allows these functions to be used in other files...
module.exports = {
  generateMarkdown
};