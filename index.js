const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const {newManagerCard, newEngineerCard, newInternCard, htmlFile} = require('./src/template')

inquirer
  .prompt([
      {
          type: 'loop',
          message: 'Do you want to add a new team member?',
          name: 'optionsLoop',
          questions: [
              {
                  type: 'list',
                  message: 'Choose a team member option to add:',
                  name: 'teamOptions',
                  choices: ['Manager', 'Engineer', 'Intern']
              },
              {
                  type: 'input',
                  message: "Enter the team manager's name, employee ID, email address, and office number. (Separate with a comma)",
                  name: 'manager',
                  when: (answers) => answers.teamOptions === 'Manager'
              },
              {
                  type: 'input',
                  message: "Enter the engineer's name, ID, email, and GitHub username. (Separate with a comma)",
                  name: 'engineer',
                  when: (answers) => answers.teamOptions === 'Engineer'
              },
              {
                  type: 'input',
                  message: "Enter the intern's name, ID, email, and school. (Separate with a comma)",
                  name: 'intern',
                  when: (answers) => answers.teamOptions === 'Intern'
              },
          ]
      }
  ])
  .then((answers) => {
    const contentCardsArray = []

    const teamList = answers.optionsLoop

    for (var i = 0; i < teamList.length; i++) {
      if (teamList[i].teamOptions === 'Manager') {
          const splitInfo = teamList[i].manager.split(',').map(item => item.trim())
          const newEmployee = new Manager(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          contentCardsArray.push(newManagerCard(newEmployee))
      } else if (teamList[i].teamOptions === 'Engineer') {
          const splitInfo = teamList[i].engineer.split(',').map(item => item.trim())
          const newEmployee = new Engineer(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          contentCardsArray.push(newEngineerCard(newEmployee))
      } else {
          const splitInfo = teamList[i].intern.split(',').map(item => item.trim())
          const newEmployee = new Intern(splitInfo[0], splitInfo[1], splitInfo[2], splitInfo[3])
          contentCardsArray.push(newInternCard(newEmployee))
      }
    }

    const contentCards = contentCardsArray.join('\n')

    fs.writeFile('./dist/index.html', htmlFile(contentCards), (err) => err ? console.log(err) : console.log('Success!'));
  })