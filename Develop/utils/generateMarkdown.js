// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "MIT") {
return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

}

else if (license === "Apache") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}  

else if (license === "BSD") {
  return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) BSD 2-Clause License"
}

else {
  return ""
}
}

// MIT','Apache','license 3
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  } else {
    return "- [Licenses](#licenses)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return `## License 
    This is using ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Questions](#questions)

  ## Description
   ${data.description}
  
    

  ## Installation Instructions
  ${data.installInstructions}


  ## Usage  
  ${data.usageInstructions}


 ${renderLicenseSection(data.license)}
  

  ## Contribution 
  ${data.contribution}

  ## Questions
  If you have any questions you can contact me here:
  [Contact Us](mailto:${data.email})
  [My GitHub](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
