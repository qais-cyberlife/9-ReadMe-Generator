// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ['What is the project name?', 'Can you provide a description of the project?', 'What are the installation instructions?', 
'What are the usage instructions?', 'What are the licenses?', 'How can developers contribute to the application?'];


inquirer.prompt([{
    type: 'input',
    name: 'name',
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
    name: 'licenses',
    message: questions[4],
    choices: ['MIT','Apache','license 3'] 
},{
    type: 'input',
    name: 'contribution',
    message: questions[5], 
}
]).then(answers => {
    return data =`
    ## Project Name:
    ${answers.name}
    

    ## Project Description:
    ${answers.description}
    

    ## Installation Instructions:
    ${answers.installInstructions}


    ## Usage Instructions:
    ${answers.usageInstructions}


    ## License Type:
    ${answers.licenses}
    

    ## How to Contribute:
    ${answers.contribution}
    `
}).then((data)=> fs.writeFileSync("readme1.md", data))





// // TODO: Create a function to write README file
// const fileName = 'README.md';

// function writeToFile(fileName, data) {
// fs.writeFileSync(fileName, data)
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();