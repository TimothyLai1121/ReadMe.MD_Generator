import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import figlet from "figlet";

//  type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor //




inquirer
  .prompt([
   {
      type: "input",
      name: "name",
      message: chalk.yellow("What is your name?"),
    },
    {
      type: "input",
      name: "projectName",
      message: chalk.yellow("What is the name of your project?"),
    },
    {
      type: "input",
      name: "projectDescription",
      message: chalk.yellow("What is the description of your project?"),
    },
    {
      type: "input",
      name: "projectUsage",
      message: chalk.yellow("What is the usage of your project?"),
    },
    {
      type: "input",
      name: "projectContributing",
      message: chalk.yellow("Who are the contributors of your project?"),
    },
    {
      type: "input",
      name: "projectTest",
      message: chalk.yellow("What is the test of your project?"),
    }
    /*
    {
      // adding list of licenses //
      /*
      type: "list",
      name: "projectLicense",
      message: chalk.yellow("What is the license of your project?"),
      choices: [
        { name: "Academic Free License v3.0", value: "afl-3.0" },
        { name: "Apache license 2.0", value: "apache-2.0" },
        { name: "Artistic license 2.0", value: "artistic-2.0" },
        { name: "Boost Software License 1.0", value: "bsl-1.0" },
        { name: 'BSD 2-clause "Simplified" license', value: "bsd-2-clause" },
        {
          name: 'BSD 3-clause "New" or "Revised" license',
          value: "bsd-3-clause",
        },
        { name: "BSD 3-clause Clear license", value: "bsd-3-clause-clear" },
        { name: "Creative Commons license family", value: "cc" },
        { name: "Creative Commons Zero v1.0 Universal", value: "cc0-1.0" },
        { name: "Creative Commons Attribution 4.0", value: "cc-by-4.0" },
        {
          name: "Creative Commons Attribution Share Alike 4.0",
          value: "cc-by-sa-4.0",
        },
        { name: "Do What The F*ck You Want To Public License", value: "wtfpl" },
        { name: "Educational Community License v2.0", value: "ecl-2.0" },
        { name: "Eclipse Public License 1.0", value: "epl-1.0" },
        { name: "Eclipse Public License 2.0", value: "epl-2.0" },
        { name: "European Union Public License 1.1", value: "eupl-1.1" },
        { name: "GNU Affero General Public License v3.0", value: "agpl-3.0" },
        { name: "GNU General Public License family", value: "gpl" },
        { name: "GNU General Public License v2.0", value: "gpl-2.0" },
        { name: "GNU General Public License v3.0", value: "gpl-3.0" },
        { name: "GNU Lesser General Public License family", value: "lgpl" },
        { name: "GNU Lesser General Public License v2.1", value: "lgpl-2.1" },
        { name: "GNU Lesser General Public License v3.0", value: "lgpl-3.0" },
        { name: "ISC", value: "isc" },
        { name: "LaTeX Project Public License v1.3c", value: "lppl-1.3c" },
        { name: "Microsoft Public License", value: "ms-pl" },
        { name: "MIT", value: "mit" },
        { name: "Mozilla Public License 2.0", value: "mpl-2." },
        { name: "Open Software License 3.0", value: "osl-3.0" },
        { name: "PostgreSQL License", value: "postgresql" },
        { name: "Sil Open Font License 1.1", value: "ofl-1.1" },
        {
          name: "University of Illinois/NCSA Open Source License",
          value: "ncsa",
        },
        { name: "The Unlicense", value: "unlicense" },
        { name: "zLib", value: "zlib" },
      ],
    },
    */
  ])
  
  .then((answers) => {
    console.log(
      chalk.bgYellow(
        `Hello ${answers.name}! Your project is named ${answers.projectName}.`
      )
    );

    const readmeTemplate = `
# ${answers.projectName}

## Description

${answers.projectDescription}

## Usage

${answers.projectUsage}

## Contributing

${answers.projectContributing}

## Tests

${answers.projectTest}

## License

${answers.projectLicense}
`;

    fs.writeFile("README.md", readmeTemplate, (error) => {
      if (error) {
        console.error(chalk.red("Failed to create README.md file."));
        console.error(error);
      } else {
        console.log(chalk.green("Successfully created README.md file."));
      }
    });
  })
  .catch((error) => {
    console.error(chalk.bgRed(error));
  });
