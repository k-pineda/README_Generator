// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
     name:'license',
     message:'Select license if used, if not used selected last option.',
     choices: ['APACHE 2.0', 'GPL 3.0', 'MIT', 'BSD 3', 'None'],
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
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('README file generated successfully!'));
};
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown({...data}));
            console.log('Generating README...');
            console.log(data);
        })
}

// Function call to initialize app
init();

 
      
