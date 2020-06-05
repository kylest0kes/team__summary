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
