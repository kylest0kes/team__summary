// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
const typeOf = "Engineer";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return typeOf;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;