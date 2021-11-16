const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const questions = () => {
    inquirer
        .prompt(
            [   {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'checkbox',
                    name: 'communication',
                    message: 'What is you preferred method of communication?',
                    choices: ['email', 'phone', 'slack', 'mail']
                },
                {
                    type: 'list',
                    name: 'language',
                    message: 'What language do you know?',
                    choices: ['English', 'Spanish', 'French', 'others']
                }
            ])
        .then((answers) => {
            writeToFile(answers);
        })
        .catch((error) => {
            console.log(error);
        });
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeToFile = data => {
    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();