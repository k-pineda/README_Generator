// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (response.userLicense.choices===Apache)
  {
    userBadge:"![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
}
badge:["![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)","![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)","![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const md =`# ${response.userProjectTitle} 
    # Description 
    ${response.userDescription}

    # Table of Contents
    ${response.userTableContents}
    [License]((https://github.com/k-pineda/readme#l))

    # Installation 
    ${response.userInstallation}

    # Usage 
    ${response.userProjectUsage}

    # License 
    ${response.userLicense}

    # Contributing 
    ${response.userProjectContribution}

    # Tests 
    ${response.userProjectTests}

    # Questions
    If you have any questions please feel free to reach out:(${response.userGithub}) or (${response.userEmailAddress})`
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
