// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
let badge;

// License function and  if/else section here 
//const getLicense=(value)=> value ? `[![License: AGPL v3](https://img.shields.io/badge/License-${value}%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)` : `no license`

function getlicense(license){
    switch(license){
        case "MIT":
            return  ``;
        case "GNU":
            return ``;
            
    }
}
switch(action){
    case "MIT":
        mitfunction()
        break;
        //etc
}

const add = (a, b) => a + b


function getLicense(value) {
  if (value === "GNU AGPLv3") { 
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software 1.0") {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}


const inquirer=require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
inquirer
.prompt([{
    type:"input",
    name:"userProjectTitle",
    message:"What is your project title?",
},

     { type:'input',
     name:'userDescription',
     message:"Provide a short description explaining the what, why, and how of your project.",
     },
     { type:'input',
     name:'userTableContents',
     message:'Add a table of contents to make it easy for users to find what they need.',
     },
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
     choices:['Apache','GNU','MIT'],
    //  when: `true`
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
  // if (response.userLicense.choices===Apache)
  // {
  //   badge=`![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  // }
    fs.writeFile("README.md",md,(error)=>{
      if(error){
         console.log(error);
      }else{
         console.log("md file generated successfully!")
      }
    })
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
