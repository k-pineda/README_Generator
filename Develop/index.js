// TODO: Include packages needed for this application
const fs=require("fs");

const inquirer=require("inquirer")
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
     choices:['','Email','Text'],
    },    
    {type:'input',
    name:'userProjectContribution',
    message:'Include guidelines if you created an application or package and would like other developers to contribute to it. An example of where they can contribute is the [Contributor Covenant](https://www.contributor-covenant.org/).',
   },
   {type:'input',
   name:'userProjectTests',
   message:'If you have written tests for your application, include examples here on how to run them.',
  },
  {type:'input',
  name:'userGithub',
  message:'Enter your GitHub Username',
 },
 {type:'input',
 name:'userEmailAddress',
 message:'Enter your email address',
},
]).then(response=>{
    const md =`# Project Title ${userProjectTitle}\n
    ## Description ${userDescription}\n
    ## Table of Contents ${userTableContents}\n
    ## Installation ${userInstallation}\n
    ## Usage ${userProjectUsage}\n
    ## License ${userLicense}\n
    ## Contributing ${userProjectContribution}\n
    ## Tests ${userProjectTests}\n
    ## Questions
    If you have any questions please feel free to reach out: ![GitHub Username](${userGithub}) or ![Email Address](${userEmailAddress})`
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
