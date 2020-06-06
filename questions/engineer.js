const buildEngineer = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Engineer name."
        }
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Engineer email."
        }
    },
    {
        type: "input",
        message: "What is the engineer's ID number?",
        name: "engineerID",
//        validate: function (input) {
//            if (teamIDArr.indexOf(input) !== -1) {
//                return "ID already exists, please enter a new ID.";
//            } return true;
//        }
    },
    {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "engineerGithub",
        validate: function(input) {
            if (input !== "") {
                return true;
            }
            return "Please enter a Engineer Github."
        }
    },
    {
        type: "list", 
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members."],
        name: "addMember"
      },
]

module.exports = buildEngineer;