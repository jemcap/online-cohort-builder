// * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
// * The first class is an `Employee` parent class with the following properties and methods:       
//   * `name`
//   * `id`
//   * `email`
//   * `getName()`
//   * `getId()`
//   * `getEmail()`
//   * `getRole()`&mdash;returns `'Employee'`     
// * The other three classes will extend `Employee`.      
// * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
//   * `officeNumber`
//   * `getRole()`&mdash;overridden to return `'Manager'`
// * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//   * `github`&mdash;GitHub username
//   * `getGithub()`
//   * `getRole()`&mdash;overridden to return `'Engineer'`
// * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
//   * `school`
//   * `getSchool()`
//   * `getRole()`&mdash;overridden to return `'Intern'`
// * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
// * When a user starts the application then they are prompted to enter the **team manager**’s:
//   * Name
//   * Employee ID
//   * Email address
//   * Office number
// * When a user enters those requirements then the user is presented with a menu with the option to:
//   * Add an engineer
//   * Add an intern 
//   * Finish building the team
// * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Engineer's Name
//   * ID
//   * Email
//   * GitHub username
// * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Intern’s name
//   * ID
//   * Email
//   * School
// * When a user decides to finish building their team then they exit the application, and the HTML is generated.
// * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
// * The `render` function will generate and return a block of HTML including templated divs for each employee!
// * Create an HTML file using the HTML returned from the `render` function. 
// * Write it to a file named `team.html` in the `output` folder. 
// * You can use the provided variable `outputPath` to target this location.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// * Create a command-line application that accepts accepts user input using the provided starter code.   
// Use Inquirer to prompt users a series of the following questions.
// name
// role
// Id
// Email
// Office Number
// Github
// School

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });

