const buildManager = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the managers's office number?",
        name: "managerOfficeNumber",
    },
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = buildManager;