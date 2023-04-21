/*Steps:
1. build directory
2. npm init and install dependencies
3. requires in index.js
4. TODO:skeleton for markdown
5. TODO:prompt questions *test
6. TODO:build functions
7. TODO:connect markdown with index.js
8.
9.
10.
*/


const inquirer = require("inquirer")
const fs = require("fs")
//i'll include the functions contained in generateMarkdown.js here, which will cause them to fire once the app is initialized//
const {} = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
  
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}








// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// WHEN I enter my project title
// THEN this is displayed as the title of the README
`# ${projectTitle}`

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
`## ${repoDescription} "\n"`
// What was your motivation?
// Why did you build this project?
// What problem does it solve?
// What did you learn?
`## ${tableOfContents} "\n"`
`## ${installationInstructions} "\n"`
// What are the steps required to install your project?
`## ${usageInformation} "\n"`
// What instructions are required for the user to use your project?
// Do you want to add a screenshot?
// Do you have any examples for use of the program?
`## ${contributionGuidelines} "\n"`
// What collaborators were involved on this project?
// What are these collaborators' github url?
// What third-party assets were used?
// What tutorials were used to design this project?
`## ${testInstructions} "\n"`
// What tests were run for this project?
// How can the user run them if they so choose?
`## ${license} "\n"`
// ![GitHub](https://img.shields.io/github/license/buster35/README-generatorino) **Badge icon**
// What license did you use for your project? (https://choosealicense.com/) 
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
`## ${questions} "\n" ${github} "\n" ${email} "\n"`

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
//*Add <link href="" w/on-page link /link> */

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions