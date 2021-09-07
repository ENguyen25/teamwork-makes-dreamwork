const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const testArray = require('./array.js')
const Employee = require('./Employee')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

inquirer
  .prompt([
    //   {
    //       type: 'loop',
    //       message: 'Do you want to add a new team member?',
    //       name: 'loopyLoop',
    //       questions: [
    //           {
    //               type: 'list',
    //               message: 'Choose a team member option to add:',
    //               name: 'teamOptions',
    //               choices: ['Manager', 'Engineer', 'Intern']
    //           },
    //           {
    //               type: 'input',
    //               message: "Enter the team manager's name, employee ID, email address, and office number. (Separate with a comma)",
    //               name: 'manager',
    //               when: (answers) => answers.teamOptions === 'Manager'
    //           },
    //           {
    //               type: 'input',
    //               message: "Enter the engineer's name, ID, email, and GitHub username. (Separate with a comma)",
    //               name: 'engineer',
    //               when: (answers) => answers.teamOptions === 'Engineer'
    //           },
    //           {
    //               type: 'input',
    //               message: "Enter the intern's name, ID, email, and GitHub username. (Separate with a comma)",
    //               name: 'intern',
    //               when: (answers) => answers.teamOptions === 'Intern'
    //           },
    //       ]
    //   }
  ])
  .then((answers) => {
    //   const htmlFile = `<!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //       <meta charset="UTF-8">
    //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Team Profile Generator</title>
    //   </head>
    //   <body>
          
    //   </body>
    //   </html>`

    //   fs.writeFile('index.html', content, (err) => err ? console.log(err) : console.log('Success!'));

    console.log(testArray)

    const teamList = testArray.loopyLoop

    console.log(teamList)

    for (var i = 0; i < teamList.length; i++) {
        if (teamList[i].teamOptions === 'Manager') {
            const splitInfo = teamList[i].manager.split(',')
            const newEmployee = new Manager(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
            console.log(newEmployee)
        }
    }

    const newCard = () => {
        const content = `<div class="content">
            <div class="card-header">
                <h1 class="name">
            </div>
            <div class="card-info"></div>
        </div>`
    }
  })