const buildManager = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Manager name."
        }
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Manager email."
        }
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is the managers's office number?",
        name: "managerOfficeNumber",
        validate: function(input) {
            if(input.length < 10) {
                return 'Please enter a valid phone number.';
            } else if(input.length > 10) {
                return 'Please enter a valid phone number.';
            } else {
                return true
            }
        }
    },
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = buildManager;