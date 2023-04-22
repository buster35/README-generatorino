const fs = require("fs")
const userAnswers = require("./index.js")
console.log(userAnswers)




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
  console.log(data)
}

//right now, there is no way for node to access these functions; to accomplish this, we can create the module.exports object: **When the key/value are equal to each other, we only have to provide one value for the two
module.exports = generateMarkdown; //where is this passed?
