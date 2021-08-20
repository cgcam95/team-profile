const inquirer = require ('inquirer');
const fs = require('fs');

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/Manager');

const employeeRoster = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managername',
        message: 'what is your name?',
        validation: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
                console.log ('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'managerid',
        message: 'what is your ID number?',
        validation: (idInput) => {
            if(idInput) {
                return true;
            } else {
                console.log ('Please enter your id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manageremail',
        message: 'what is your email?',
        validation: (emailInput) => {
            if(emailInput) {
                return true;
            } else {
                console.log ('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'manageroffice',
        message: 'what is your office number?',
        validation: (officeInput) => {
            if(officeInput) {
                return true;
            } else {
                console.log ('Please enter your office number!');
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineername',
        message: 'what is your name?',
        validation: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
                console.log ('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'engineerid',
        message: 'what is your ID number?',
        validation: (idInput) => {
            if(idInput) {
                return true;
            } else {
                console.log ('Please enter your id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: 'what is your email?',
        validation: (emailInput) => {
            if(emailInput) {
                return true;
            } else {
                console.log ('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineergithub',
        message: 'what is your github?',
        validation: (githubInput) => {
            if(githubInput) {
                return true;
            } else {
                console.log ('Please enter your github!');
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internname',
        message: 'what is your name?',
        validation: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
                console.log ('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'internid',
        message: 'what is your ID number?',
        validation: (idInput) => {
            if(idInput) {
                return true;
            } else {
                console.log ('Please enter your id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internemail',
        message: 'what is your email?',
        validation: (emailInput) => {
            if(emailInput) {
                return true;
            } else {
                console.log ('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internschool',
        message: 'what is your school?',
        validation: (schoolInput) => {
            if(schoolInput) {
                return true;
            } else {
                console.log ('Please enter your school!');
                return false;
            }
        }
    }
]

const list = [
{
    type: 'list',
    name: 'employeetype',
    message: 'Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'Exit']
}
]

const generalPrompt = () => {
    inquirer
    .prompt(list)
    .then((answers) => {
        switch(answers.employeetype) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Exit':
                console.log(employeeRoster)
                break;
        }
    })
}

const mainPrompt = () => {
    inquirer
    .prompt(managerQuestions)
    .then(managerAnswers => {
        employeeRoster.push(
            new Manager(
                managerAnswers.managername,
                managerAnswers.managerid,
                managerAnswers.manageremail,
                managerAnswers.manageroffice
            )
        )
        generalPrompt();
    })
}

const engineerPrompt = () => {
    inquirer
    .prompt(engineerQuestions)
    .then(engineerAnswers => {
        employeeRoster.push(
            new Engineer(
                engineerAnswers.engineername,
                engineerAnswers.engineerid,
                engineerAnswers.engineeremail,
                engineerAnswers.engineergithub
            )
        )
        generalPrompt();
    })
}
const internPrompt = () => {
    inquirer
    .prompt(internQuestions)
    .then(internAnswers => {
        employeeRoster.push(
            new Intern(
                internAnswers.internname,
                internAnswers.internid,
                internAnswers.internemail,
                internAnswers.internschool
            )
        )
        generalPrompt();
})
}

mainPrompt();
