// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer = require('inquirer')
let badge;

inquirer
.prompt([
    {
    type:"input",
    name:"userProjectTitle",
    message:"What is your project title?",
    },

     { type:'input',
     name:'userDescription',
     message:"Provide a short description explaining the what, why, and how of your project.",
     },
    //  { type:'input',
    //  name:'userTableContents',
    //  message:'Add a table of contents to make it easy for users to find what they need.',
    //  },
     {type:'input',
     name:'userInstallation',
     message:'What are the steps required to install your project?',
    },
    {type:'input',
     name:'userProjectUsage',
     message:'Provide instructions and examples for use of application.',
    },
    {type:'list',
     name:'userLicense',
     message:'Select license if used, if not used selected last option.',
     choices: ['Apache(https://opensource.org/licenses/Apache-2.0)', 'Boost(https://www.boost.org/LICENSE_1_0.txt)', 'GNU(https://www.gnu.org/licenses/gpl-3.0)', 'MIT(https://opensource.org/licenses/MIT)', 'IBM(https://opensource.org/licenses/IPL-1.0)', 'ISC(https://opensource.org/licenses/ISC)'],
    },    
    {type:'input',
    name:'userProjectContribution',
    message:'Include guidelines if you created an application or package and would like other developers to contribute to it.',
   },
   {type:'input',
   name:'userProjectTests',
   message:'If you have written tests for your application, include examples here on how to run them.',
  },
  {type:'input',
  name:'userGithub',
  message:'Enter your GitHub Username & GitHub Portfolio Link',
 },
 {type:'input',
 name:'userEmailAddress',
 message:'Enter your email address',
},
]).then(response=>{
    if (response.license === 'Apache(https://opensource.org/licenses/Apache-2.0)') {
        badge = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
     } else if (response.license === 'Boost(https://www.boost.org/LICENSE_1_0.txt)') {
        badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
     } else if (response.license === 'GNU(https://www.gnu.org/licenses/gpl-3.0)') {
        badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
     } else if (response.license === 'MIT(https://opensource.org/licenses/MIT)') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
     } else if (response.license === 'IBM(https://opensource.org/licenses/IPL-1.0)') {
        badge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
     } else {
        badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
     }
     const readme = `# ${response.userProjectTitle} ${badge}

     ## Table of Contents

     [Description](#userDescription)\n
     [Installation](#userInstallation)\n
     [Usage](#userProjectUsage)\n
     [License](#userLicense)\n
     [Contributing](#userProjectContribution)\n
     [Test](#userProjectTests)\n
     [Questions](#userGithub)\n
     
     
     ## Description
     
     ${response.userDescription}\n
     
     ## Installation
     
     ${response.userInstallation}\n
     
     ## Usage
     
     ${response.userProjectUsage}\n
     
     ## License 
     
     ${response.userLicense}\n
     
     ## Contributing
     
     ${response.userProjectContribution}\n
     
     ## Tests
     
     ${response.userProjectTests}\n
     
     ## Questions
     
     GitHub Username/Link to profile:  ${response.userGithub}\n 
     
     Contact Info: ${response.userEmailAddress}\n`
        fs.writeFile('README.md', readme, error => {
           if (error) {
              console.log(error)
           } else {
              console.log('responses saved successfully')
           }
        })
     
     })
