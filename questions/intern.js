const buildIntern = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Intern name."
        }
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Intern email."
        }
    },
    {
        type: "input",
        message: "What is the intern's ID number?",
        name: "internID",
//        validate: function (input) {
//            if (teamIDArr.indexOf(input) !== -1) {
//                return "ID already exists, please enter a new ID.";
//            } return true;
//        }
    },
    {
        type: "input",
        message: "What school did they attend?",
        name: "internSchool",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Intern school."
        }
    },
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = buildIntern;