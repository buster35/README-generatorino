const inquirer = require("inquirer");
const fs = require("fs");
module.exports = writeToFile;
//this links the generateMarkdown function to index.js; now we can pass in the response parameter, which will log in the generateMarkdown.js file//
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
    message: "What instructions are required for the user to use your project?",
    name: "instructions",
  },
  {
    type: "confirm",
    message: "Do you want to add a broad-spectrum screenshot for the project?",
    name: "screenshot1",
  },
  {
    type: "confirm",
    message: "Do you have any specific screenshot examples for use of the program?",
    name: "screenshot2",
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
    message: "Please input your GitHub profile link",
    name: "userGithub",
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
    if (response.screenshot1 === true) {
      const bigScreenshot = {
        type: "input",
        message: "Please provide an image link for your broad-spectrum screenshot",
        name: "actualScreenshot",
      };
      return inquirer.prompt(bigScreenshot);
    }
    if (response.screenshot2 === true) {
      const smallScreenshot = {
        type: "input",
        message: "Please provide an image link for your specific screenshot(s)",
        name: "moreScreenshots",
      };
      return inquirer.prompt(smallScreenshot);
    }
    generateMarkdown(response); //goes to generateMarkdown function in generateMarkdown.js//
  });
}

function writeToFile(fileName, file) {
  fs.writeFile(fileName, file, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
// Function call to initialize app
init();

//![GitHub](https://img.shields.io/github/license/buster35/README-generatorino) **Badge icon**

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
