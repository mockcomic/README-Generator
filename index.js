const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown')

const promptUser = () => {
    return inquirer.prompt(
            [{
                    type: 'input',
                    name: 'title',
                    message: 'Project title:',
                    validate: titleInput => {
                        if (titleInput) {
                            return true;
                        } else {
                            console.log('Please enter a project title!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Provide a description of the project (Required)',
                    validate: descriptionInput => {
                        if (descriptionInput) {
                            return true;
                        } else {
                            console.log('Please enter a project description!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'instructions',
                    message: 'Provide installation instructions for the project (Required)',
                    validate: instructionsInput => {
                        if (instructionsInput) {
                            return true;
                        } else {
                            console.log('Please add installation instructions!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Provide usage information for the project (Required)',
                    validate: usageInput => {
                        if (usageInput) {
                            return true;
                        } else {
                            console.log('Please provide usage information!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Provide usage information for the project (Required)',
                    validate: usageInput => {
                        if (usageInput) {
                            return true;
                        } else {
                            console.log('Please provide usage information!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'contribution ',
                    message: 'Provide contribution guidelines for the project (Required)',
                    validate: contributionInput => {
                        if (contributionInput) {
                            return true;
                        } else {
                            console.log('Please provide usage information!');
                            return false;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'test ',
                    message: 'Provide test instructions for the project (Required)',
                    validate: testInput => {
                        if (testInput) {
                            return true;
                        } else {
                            console.log('Please provide test instructions!');
                            return false;
                        };
                    }
                },
                {
                    type: 'list',
                    name: 'license',
                    message: 'Please select a license.',
                    choices: ['None', 'MIT License', 'GNU GPL v3', 'Apache 2.0 License']
                },
            ]).then((data) => {
            questions = {data};
            generateMarkdown(questions);
            // writeToFile(questions);
        })
        .catch((error) => {
            console.log(error);
        });

};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeToFile = (data) => {
     fs.writeFile('./dist/README.md', JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};


// TODO: Create a function to initialize app
function init() {
     promptUser();
};

// Function call to initialize app
init()