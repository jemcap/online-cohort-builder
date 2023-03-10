// TODO: Write code to define and export the Employee class

// * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.

// The first class is an `Employee` parent class with the following properties and methods:
//       * `name`
//       * `id`
//       * `email`
//       * `getName()`
//       * `getId()`
//       * `getEmail()`
//       * `getRole()`&mdash;returns `'Employee'`

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
};

module.exports = Employee;
