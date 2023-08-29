// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'APACHE 2.0') 
    {
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
     else if (license === 'GPL 3.0')
    {
      return`![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } 
    else if (license === 'MIT') { 
      return`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
     } else if (license === 'BSD 3') { 
      return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
     } else {
        return '';
     };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'APACHE 2.0') {
  return 'https://opensource.org/licenses/Apache-2.0';
} else if (license === 'GPL 3.0') {
  return 'https://www.gnu.org/licenses/gpl-3.0';
} else if (license === 'MIT') {
  return 'https://opensource.org/licenses/MIT';
} else if (license === 'BSD 3') {
  return 'https://opensource.org/licenses/BSD-3-Clause';
} else {
  return '';
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    "APACHE 2.0": 'This project is licensed under the APACHE 2.0 License.',
    "GPL 3.0": 'This project is licensed under the GPL 3.0 License.',
    MIT: 'This project is licensed under the MIT License.',
    BSD_3 : 'This project is licensed under the BSD 3 License.',
    None: ''
}
return licenseTexts[license] || '';
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.userProjectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.userDescription}
  ## Table of Contents

  - [Installation](#userInstallation)
  
  - [Usage](#userProjectUsage)
  
  - [License](#license)

  - [How to Contribute](#userProjectContribution)

  - [Tests](#userProjectTests)

  - [Questions](#userGithub)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.userInstallation}

  ## Usage

    ${data.userProjectUsage}

  ## License  

  ${renderLicenseSection(data.license)}

  For more informations, please visit: [License Link](${renderLicenseLink(data.license)})

  ## How to Contribute

    ${data.userProjectContribution}

  ## Tests

    To run tests, run the following command:

    ${data.userProjectTests}

  ## Questions

  If you have any questions about the repository, open an issue or contact me directly at ${data.userEmailAddress}. You can find more of my projects at https://github.com/${data.userGithub}
  
  `;
};

module.exports = generateMarkdown;
