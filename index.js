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
    const contentCardsArray = []

    const teamList = testArray.loopyLoop

    const newManagerCard = (manager) => {
        const content = `<div class="content">
            <div class="card-header">
                <h1 class="name">${manager.name}</h1>
            </div>
            <div class="card-info">
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>`
        contentCardsArray.push(content)
    }

    const newEngineerCard = (engineer) => {
          const content = `        <div class="content">
            <div class="card-header">
                <h1 class="name">${engineer.name}</h1>
            </div>
            <div class="card-info">
                <p>ID: ${engineer.id}</p>
                <p>Email: ${engineer.email}</p>
                <p>GitHub: ${engineer.github}</p>
            </div>
          </div>`
        contentCardsArray.push(content)
    }

    const newInternCard = (intern) => {
        const content = `        <div class="content">
            <div class="card-header">
                <h1 class="name">${intern.name}</h1>
                </div>
            <div class="card-info">
                <p>ID: ${intern.id}</p>
                <p>Email: ${intern.email}</p>
                <p>School: ${intern.school}</p>
            </div>
        </div>`
        contentCardsArray.push(content)

    }

    for (var i = 0; i < teamList.length; i++) {
      if (teamList[i].teamOptions === 'Manager') {
          const splitInfo = teamList[i].manager.split(',').map(item => item.trim())
          const newEmployee = new Manager(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          newManagerCard(newEmployee)
      } else if (teamList[i].teamOptions === 'Engineer') {
          const splitInfo = teamList[i].engineer.split(',').map(item => item.trim())
          const newEmployee = new Engineer(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          newEngineerCard(newEmployee)
      } else {
          const splitInfo = teamList[i].intern.split(',').map(item => item.trim())
          const newEmployee = new Intern(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          newInternCard(newEmployee)
      }
    }

    const contentCards = contentCardsArray.join('\n')

    const htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Team!</title>
</head>
<body>

<header>My Awesome Team!</header>

    <div class="container">

        ${contentCards}

    </div>
      
</body>
</html>`

      fs.writeFile('index.html', htmlFile, (err) => err ? console.log(err) : console.log('Success!'));
  })