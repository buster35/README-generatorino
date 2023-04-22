const fs = require("fs")
// {
//   projectTitle: 'jkldas;',
//   motivation: 'jdflksa;',
//   whyBuild: 'jfdklsa;',
//   problemsSolved: 'jfdklas;',
//   whatWasLearned: 'jdflas;',
//   instructions: 'fjdlas;',

//   screenshot1: false,
//   screenshot2: false,
//   collaborators: 'jdklfas;',
//   collaboratorsGithub: 'jdfklsa;',
//   thirdPartyAssets: 'jdkla;s',
//   tutorials: 'jdfklas;',
//   tests: 'jfdklsa;',
//   testRun: 'jfdksla',
//   license: 'MIT'
// }
function createTitle (title) {
  let projectTitle = `# ${title.projectTitle} "\n"`
  console.log(projectTitle)
}

function createDescription (description) {
  let readmeDescription = `## Description "\n" ${description.motivation} "\n" ${description.whyBuild} "\n" ${description.problemsSolved} "\n" ${description.whatWasLearned} "\n"`
}

function tableOfContents () {
  let contents = '## Table of Contents: "\n" ### [Instructions](#instructions) "\n" ### [Screenshots](#screenshots) "\n" ### [Collaborators](#collaborators) "\n" ### [Tests](#tests) "\n" ### [License](#license) "\n"'
}

function createInstructions (instructions) {
  let readmeInstructions = `## Instructions {#instructions} "\n" ${instructions.instructions} "\n"`
}

function renderScreenshots () { //if/else statement to render screenshots if answer is "true"//

}

function includeCollaborators () {

}

function includeTests () {

}

function includeQuestions (questions) {
  let contactInfo = `## Questions {#questions} "\n" Please direct any further questions to: ${questions.userGithub} or ${questions.email}`
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  createTitle (data)
  createDescription (data)
  createInstructions (data)
  renderScreenshots (data)

  includeQuestions (data)
}

//the module.exports object allows these functions to be used in other files...
module.exports = {
  generateMarkdown, createTitle, createDescription, tableOfContents, createInstructions, 
}