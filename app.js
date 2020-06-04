const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const buildManager = require("./questions/manager");
const buildEngineer = require("./questions/engineer");
const buildIntern = require("./questions/intern");

const util = require("util");
const asyncWriteFile = util.promisify(fs.writeFile)


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employees = [];
const teamIDArr = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


init()

async function init() {
    console.log("Please build your team.")
    try {
        const teamManager = await inquirer.prompt(buildManager);
        teamIDArr.push(teamManager.managerID);
        const manager = new Manager (teamManager.managerName, teamManager.managerEmail, teamManager.managerID, teamManager.managerOfficeNumber)
        employees.push(manager);
        if (teamManager.addMember === "Engineer") {
            engineerMember();
        } else if (teamManager.addMember === "Intern") {
            internMember();
        }  else {
            console.log("You have successfully built your team!");
            renderHTML()
        }
    } 
    catch(err) {
        console.log(err);
    }
}

async function engineerMember() {
    try {
        const teamEngineer = await inquirer.prompt(buildEngineer);
        teamIDArr.push(teamEngineer.engineerID);
        const engineer = new Engineer (teamEngineer.engineerName, teamEngineer.engineerEmail, teamEngineer.engineerID, teamEngineer.engineerGithub)
        employees.push(engineer);
        if (teamEngineer.addMember === "Engineer") {
            engineerMember();
        } else if (teamEngineer.addMember === "Intern") {
            internMember();
        }  else {
            console.log("You have successfully built your team!");
            renderHTML()
        }
    } 
    catch(err) {
        console.log(err);
    }
}

async function internMember() {
    try {
        const teamIntern = await inquirer.prompt(buildIntern);
        teamIDArr.push(teamIntern.internID);
        const intern = new Intern (teamIntern.internName, teamIntern.internEmail, teamIntern.internID, teamIntern.internSchool)
        employees.push(intern);
        if (teamIntern.addMember === "Engineer") {
            engineerMember();
        } else if (teamIntern.addMember === "Intern") {
            internMember();
        } else {
            console.log("You have successfully built your team!");
            renderHTML()
        }
    } 
    catch(err) {
        console.log(err);
    }
}

async function renderHTML() {
    try {
        const newHTML = render(employees)
        await asyncWriteFile(outputPath, newHTML)
    }
    catch(err) {
        console.log(err);
    }
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
