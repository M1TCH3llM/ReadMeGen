// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

//links mark down to index file
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console"); // = console.log
log("Hello Im Here");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What does it do?",
  },
  {
    name: "usage",
    type: "input",
    message: "What is the proposed usage ",
  },
  {
    name: "installation",
    type: "input",
    message: "What are the steps of instillation?",
  },
  {
    name: "credits",
    type: "input",
    message: "List your collaborators, with github links",
  },
  {
    name: "license",
    type: "list",
    message: "License?",
    choices: ["MIT", "ICS", "GNUPLv3", "Mozilla"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    // need to figure this out
    name: "badges",
    type: "input",
    message: "What badges do you want to rep your street cred?",
  },
  {
    name: "features",
    type: "input",
    message: "List the features of your application",
  },
  {
    name: "test",
    type: "input",
    message:
      "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
  {
    name: "link",
    type: "input",
    message: "Enter deployed link",
  },
  {
    name: "media",
    type: "input",
    message: "Enter media link",
  },
  {
    name: "github",
    type: "input",
    message: "Enter GitHub URL",
  },
  {
    name: "email",
    type: "input",
    message: "Enter email",
  },
];

// TODO: Create a function to write README file
//function grabs data from init/ prompt function and writes it to a file titled read me
function writeToFile(fileName, data) {
  // fs = writes files
  fs.writeFile(fileName, data, (err) =>
    err
      ? // lets you know if file was successfully generated
        console.log("Could not save file")
      : console.log(
          "Success: new README.md file generated inside the current folder"
        )
  );
}

// TODO: Create a function to initialize app
// function activates prompts when node index is called
function init() {
  // node function displays questions
  inquirer
    .prompt(questions)
    // saves answers
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      // passes data to markdown generator
      const markDown = generateMarkdown(answers);
      // passes key and data to write to file function
      writeToFile("README.md", markDown);
    })
    // displays errors if any
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
