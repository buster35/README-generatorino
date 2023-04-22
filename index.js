/*Steps:
1. build directory
2. npm init and install dependencies
3. requires in index.js
4. skeleton for markdown
5. TODO:prompt questions *test
6. TODO:build functions
7. TODO:connect markdown with index.js
8.
9.
10.
*/

const inquirer = require("inquirer");
const fs = require("fs");
//i'll include the functions contained in generateMarkdown.js here, which will cause them to fire once the app is initialized//
const {} = require("./utils/generateMarkdown");

inquirer.prompt(title, description, instructions, collaborators, tests, license).then((response) => {console.log(response.name)})

//variables containing question hashes//
const title = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
];

const description = [
  {
    type: "input",
    message: "What was your motivation?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "whyBuild",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "problemsSolved",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "whatWasLearned",
  },
];

const instructions = [
  {
    type: "input",
    message: "What instructions are required for the user to use your project?",
    name: "instructions",
  },
  {
    type: "confirm",
    message: "Do you want to add a screenshot?",
    name: "screenshot1",
    when: gfsd, //ternary statement?
  },
  {
    type: "confirm",
    message: "Do you have any examples for use of the program?",
    name: "screenshot2",
    when: fdsa,
    //ternary statement?
  },
];

const collaborators = [
  {
    type: "input",
    message: "What collaborators were involved on this project?",
    name: "collaborators",
  },
  {
    type: "input",
    message: "What are these collaborators' github url?",
    name: "collaboratorsGithub",
  },
  {
    type: "input",
    message: "What third-party assets were used?",
    name: "thirdPartyAssets",
  },
  {
    type: "input",
    message: "What tutorials were used to design this project?",
    name: "tutorials",
  },
];

const tests = [
  {
    type: "input",
    message: "What tests were run for this project?",
    name: "tests",
  },
  {
    type: "input",
    message: "How can the user run them if they so choose?",
    name: "testRun",
  },
];

const license = [
  {
    type: "list",
    message: "What license are you using for your project?",
    name: "license",
    choices: ["MIT", "jdfkslalkdasf"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

`# ${projectTitle}`// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
`## ${repoDescription} "\n"``## ${tableOfContents} "\n"``## ${installationInstructions} "\n"``## ${usageInformation} "\n"``## ${contributionGuidelines} "\n"`//    https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
`## ${testInstructions} "\n"``## ${license} "\n"`// ![GitHub](https://img.shields.io/github/license/buster35/README-generatorino) **Badge icon**
//  (https://choosealicense.com/)

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
`## ${questions} "\n" ${github} "\n" ${email} "\n"`;

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
//*Add <link href="" w/on-page link /link> */

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
