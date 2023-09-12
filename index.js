// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
      name: "Title",
      type: "input",
      message: "What is the title of your project?",
    },
    {
      name: "Description",
      type: "input",
      message: "What does it do?",
    },
    {
      name: "Table of contents",
      type: "input",
      // list table of contents some how
      message: "?"
    },
    {
      name: "Installation",
      type: "input",
      message: "What are the steps of instillation?",
    },
    {
        name: "Credits",
        type: "input",
        message: "List your collaborators, with github links",
      },
      {
        name: "Licenses",
        type: "input",
        message: "What licenses do you have",
      },
      {
        name: "Badges",
        type: "input",
        message: "What badges do you want to rep your street cred?",
      },
      {
        name: "Features",
        type: "input",
        message: "List the features of your application",
      },
      {
        name: "Test",
        type: "input",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      const markDown = generateMarkdown(answers)
        console.log(markDown)
    })
    .catch((error) => {
        console.error(error)
    });
}

// Function call to initialize app
init();
