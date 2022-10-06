
const generateFile = require('./src/generateFile.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

const fs = require('fs'); 
const inquirer = require('inquirer');

const team = []; 

const addManager = () =>  
{
  return inquirer.prompt ([
    {
      message: 'Please enter the name of the manager:',
      type: 'input',
      name: 'name'
    },
    {
      message: "Please enter the manager's employee ID:",
      type: 'input',
      name: 'id'
    },
    {
      message: "Please enter the manager's email:",
      type: 'input',
      name: 'email'
    },
    {
      message: "Please enter the manager's office number:",
      type: 'input',
      name: 'officeNumber'
    }
  ])

  .then(managerInput => 
    {
      let name = managerInput.name;
      let id = managerInput.id;
      let email = managerInput.email;
      let officeNumber = managerInput.officeNumber;

      const manager = new Manager (name, id, email, officeNumber);
      team.push(manager); 
      console.log(manager); 
    })
};

const addEmployee = () => 
{
  return inquirer.prompt ([
    {
        message: "Please select the employee role:",
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },
    {
        message: "Please enter the name of the employee:",
        type: 'input',
        name: 'name'
    },
    {
        message: "Please enter the employee's ID:",
        type: 'input',
        name: 'id'
    },
    {
        message: "Please enter the employee's email:",
        type: 'input',
        name: 'email'
    },
    {
        message: "Please enter the employee's github username:",
        type: 'input',
        name: 'github',
        when: (input) => input.role === "Engineer",
    },
    {
        message: "Please enter the intern's school name:",
        type: 'input',
        name: 'school',
        when: (input) => input.role === "Intern"
    },
    {
        message: 'Would you like to add more team members?',
        type: 'confirm',
        name: 'confirmAddEmployee',
        default: false
    }
  ])

  .then(employeeData => 
    {
      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee; 

      if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);
          console.log(employee);
      }

      team.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(team); 
      } else {
          return team;
      }
    })
};

// generates HTML file 
const writeFile = data => 
{
  fs.writeFile('./dist/index.html', data, err => 
    {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(team => 
  {
    return generateFile(team);
  })
  .then(pageHTML => 
  {
    return writeFile(pageHTML);
  })
  .catch(err => 
  {
  console.log(err);
  });

  