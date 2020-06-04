const buildIntern = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is the intern's ID number?",
        name: "internID",
    },
    {
        type: "input",
        message: "What school did they attend?",
        name: "internSchool",
    },
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = buildIntern;