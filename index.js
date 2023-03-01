// * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

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

// * When a user starts the application then they are prompted to enter the **team manager**’s:
//   * Name
//   * Employee ID
//   * Email address
//   * Office number

// empty array to store all of the team members
const employees = [];

// Prompt user for information about the team manager
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      validate: (email) => {
        if (
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          )
        ) {
          return true;
        }
        return "Please enter a valid email address";
      },
      message: "What is the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      validate: (answer) => {
        if (isNaN(answer)) {
          return "please enter a number";
        }
        return true;
      },
      message: "What is the team manager's office number?",
    },
  ])
  // Upon success, instantiate the manager with answers
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    // Call function to prompt user for more employees
    promptEmployee();
  });

// Takes the user back to the choices list after every prompt
// Prompt user to add another employee or finish building the team
function promptEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Which type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    // A separate prompt for engineer
    .then((answers) => {
      if (answers.employeeType === "Engineer") {
        // Prompt user for information about an engineer
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the engineer's employee ID?",
            },
            {
              type: "input",
              name: "email",
              validate: (email) => {
                if (
                  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                  )
                ) {
                  return true;
                }
                return "Please enter a valid email address";
              },
              message: "What is the team engineer's email address?",
            },
            {
              type: "input",
              name: "github",
              message: "What is the engineer's GitHub username?",
            },
          ])
          // Upon success, instantiate the engineer with answers
          .then((answers) => {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            );
            // Push the result of engineer to the employees array
            employees.push(engineer);
            // Call function to prompt user for more employees
            promptEmployee();
          });
      } else if (answers.employeeType === "Intern") {
        // Prompt user for information about an intern
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's employee ID?",
            },
            {
              type: "input",
              name: "email",
              validate: (email) => {
                if (
                  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                  )
                ) {
                  return true;
                }
                return "Please enter a valid email address";
              },
              message: "What is the intern's email address?",
            },
            {
              type: "input",
              name: "school",
              message:
                "What school or institution has the intern been enrolled to?",
            },
          ])
          .then((answers) => {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            employees.push(intern);
            // Call function to prompt user for more employees
            promptEmployee();
          });
      } else {
        renderTeam();
      }
    });
}

function renderTeam() {
  const html = render(employees);
  // using fs.writeFile and passing outputPath to target the desired location and create the html file to outputPath
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("Team roster created successfully!");
  });
}
