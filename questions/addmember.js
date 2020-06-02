const addMember = [
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = addMember;