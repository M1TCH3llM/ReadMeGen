// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console"); // = console.log 
log("Hello Im Here")
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
    choices: ["MIT", "ICS", "GNUPLv3"],
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //   fs.writeFile(fileName, data, function (err){
  //       if (err) {
  //           console.log("Could not save file");
  //       } else {
  //           console.log("Success: new README.md file generated inside the current folder");

  //       }
  //   });
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log("Could not save file")
      : console.log(
          "Success: new README.md file generated inside the current folder"
        )
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      const markDown = generateMarkdown(answers);
      writeToFile("README.md", markDown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
