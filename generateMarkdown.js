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
  let projectTitle = `# ${title.projectTitle}`
  console.log(projectTitle)
}

function createDescription (description) {//dont need "Description" title here, just individual paragraphs for the user sub-inpputs//
  let readmeDescription = `## Description "\n" ${description.motivation} "\n" ${description.whyBuild} "\n" ${description.problemsSolved} "\n" ${description.whatWasLearned}`
}

function createInstructions () {

}

function renderScreenshots () {

}

function includeCollaborators () {

}

function includeThirdPartyAssets () {

}

function includeTests () {

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
}

//right now, there is no way for node to access these functions; to accomplish this, we can create the module.exports object: **When the key/value are equal to each other, we only have to provide one value for the two
module.exports = {
  generateMarkdown, createTitle, createDescription, //this allows generateMarkdown to be used in other files...
}