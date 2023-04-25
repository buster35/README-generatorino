const inquirer = require("inquirer");
const fs = require("fs");
module.exports = writeToFile;
//this links the generateMarkdown function to index.js; now we can pass in the response parameter, which will log in the gen.js file//
const generateMarkdown = require("./gen.js");

const title = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
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
  {
    type: "input",
    message: "What are the steps for proper installation of this app?",
    name: "installationInstructions"
  },
  {
    type: "input",
    message: "What instructions are required for the user to use your project?",
    name: "instructions",
  },
  {
    type: "input",
    message: "Please provide a screenshot(s) for this project in markdown form (![Screenshot comment](/path/to/img/file.filename)",
    name: "screenshot1",
  },
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
  {
    type: "list",
    message: "What license are you using for your project?",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "None"],
  },
  {
    type: "input",
    message: "Please input your GitHub profile",
    name: "userGithub",
  },
  {
    type: "input",
    message: "Please input your desired destination GitHub repository name",
    name: "userRepo"
  },
  {
    type: "input",
    message:
      "Please input an email address (if applicable) you'd like to include in your readme",
    name: "email",
  },
];

function init() {
  inquirer.prompt(title).then((response) => {
    generateMarkdown(response);
  });
}

function writeToFile(fileName, file) {
  fs.writeFile(fileName, file, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
// Function call to initialize app
init();
