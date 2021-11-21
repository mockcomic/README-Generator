function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "GNU GPL v3":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "Apache 2.0 License":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return ' ';
  };
};


function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#Contributing)
  * [License](#license)


 ## Description
 ${data.description}

 ## Installation
 ${data.instructions}
 
 ## Usage 
 ${data.usage}
 
 ## Contributing
${data.contribution}
 
 ## Tests
${data.test} 

---
## License
${data.license} 

 ## Questions
 Please conatct me if you have any questions or concerns.

 \n${data.email}

 \nhttps://github.com/${data.github} 
 `
};

module.exports = generateMarkdown;