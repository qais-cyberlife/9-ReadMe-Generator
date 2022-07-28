const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ['What is the project name?', 
'Can you provide a description of the project?', 
'What are the installation instructions?', 
'What are the usage instructions?', 
'What are the licenses?', 
'How can developers contribute to the application?', 
'What is your GitHub Username?',
'What is your Email Address?'];


inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: questions[0], 
},{
    type: 'input',
    name: 'description',
    message: questions[1], 
},{
    type: 'input',
    name: 'installInstructions',
    message: questions[2], 
},{
    type: 'input',
    name: 'usageInstructions',
    message: questions[3], 
},{
    type: 'list',
    name: 'license',
    message: questions[4],
    choices: ['MIT','Apache','BSD', "None"],
},{
    type: 'input',
    name: 'contribution',
    message: questions[5], 
},{
    type: 'input',
    name: 'github',
    message: questions[6], 
},{
    type: 'input',
    name: 'email',
    message: questions[7], 
}

]).then(answers => {
    let template = generateMarkdown (answers)
    console.log(template)
   
    fs.writeFile("README.md", template, (err) => {
        if (err) {
            throw err
        } else {
            console.log("🎉 Read Me File Created Successfully 🎉")
        }
    })
})






// // TODO: Create a function to write README file
// const fileName = 'README.md';

// function writeToFile(fileName, data) {
// fs.writeFileSync(fileName, data)
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();