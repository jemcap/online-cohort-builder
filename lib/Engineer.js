// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//       * `github`&mdash;GitHub username
//       * `getGithub()`
//       * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};


const newEngineer = new Engineer('Mel', 'id1234', 'mel@mel.com', 'github2')
console.log(newEngineer.name);


module.exports = Engineer;
