const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var genQuestions = [
  { name: 'name', message: 'Employee name:' },
  { name: "id", message: "Employee ID: " },
  { name: 'email', message: 'Employee email:' },
  {
    type: "list", name: 'role', message: 'Employee role:',
    choices: ['engineer', 'manager', 'intern']
  }
];
var initial = [
  {
    type: 'list', name: 'adding', message: 'What would you like to do?',
    choices: ['Add employee', 'All finished adding employees']
  }
];
var roleQuestions = [
  { name: "school", message: "What is your Intern's school?" },
  { name: "github", message: "What is your Engineer's GitHub username?" },
  { name: "officeNum", message: "What is your Manager's office number?" }
];

var allEmployees = [];


function initiate() {
  inquirer.prompt(initial).then(answer => {
    if (answer.adding == 'Add employee') {
      addEmployee();
    }
    if (answer.adding == 'All finished adding employees') {
      const html = render(allEmployees);
      htmlRender(html);
    }

  });
};

function addEmployee() {
  inquirer.prompt(genQuestions).then(answers => {
    var _name = answers.name;
    var _id = answers.id;
    var _email = answers.email;
    var _role = answers.role;


    let roles = function () {
      if (_role == 'manager') {
        inquirer.prompt(roleQuestions[2]).then(answers => {
          var _officeNum = answers.officeNum;
          let manager = new Manager(_name, _id, _email, _officeNum)
          allEmployees.push(manager);
        });
      }
      else if (_role == 'engineer') {
        inquirer.prompt(roleQuestions[1]).then(answers => {
          var _github = answers.gitHub;
          let engineer = (new Engineer(_name, _id, _email, _github))
          allEmployees.push(engineer);
        });
      }

      else {
        inquirer.prompt(roleQuestions[0]).then(answers => {
          var _school = answers.school;
          let intern = new Intern(_name, _id, _email, _school);
          allEmployees.push(intern);
        });
      };
    };

    roles();

  });
  // .catch(error => {
  //   throw error
  // })
};


function htmlRender(html) {
  fs.writeFile(outputPath, html, (error) => {
    if (error) throw error;
    console.log("success");

  });
};


initiate();

// let confirm = function () {
//   inquirer.prompt(initial).then(answer => {
//     if (answer.adding == 'Add employee') {
//       addEmployee();
//     }
//     if (answer.adding == 'All finished adding employees') {
//       const html = render(allEmployees);
//       htmlRender(html);
//     }
//   });
// };
// confirm();

// render(answers)

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
// for the provided `render` function to work!```
