#!/usr/bin/env node
"use strict";

const chalk = require("chalk");
const commander = require("commander");
// const dns = require('dns');
const envinfo = require("envinfo");
// const execSync = require('child_process').execSync;
const fs = require("fs");
// const hyperquest = require('hyperquest');
const inquirer = require("inquirer");
const os = require("os");
const path = require("path");
const semver = require("semver");
// const spawn = require('cross-spawn');
// const tmp = require('tmp');
// const unpack = require('tar-pack').unpack;
// const url = require('url');
const validateProjectName = require("validate-npm-package-name");
const packageJson = require("../../package.json");
const createParcelReact = require("../lib/index");
let packageName, packageVersion, packageDescription, packageAuthor;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .action(name => {
    packageName = name;
  })
  // .option("--scss", "(add scss to your project)")
  // .option("--redux", "(add redux to your project)")
  // .option("--router", "(add router to your project)")
  // .option("--antd", "(add antd to your project)")
  // .option(
  //   "--typescript",
  //   "(this option will be removed in favour of templates in the next major release of create-react-app)"
  // )
  .parse(process.argv);
if (typeof packageName === "undefined") {
  console.error("Please specify the project directory:");
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`
  );
  console.log();
  console.log("For example:");
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green("my-react-app")}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

const validateResult = validateProjectName(packageName)["validForNewPackages"];
if (!validateResult) {
  console.error(
    chalk.red(
      `Cannot create a project named ${chalk.green(
        `"${appName}"`
      )} because of npm naming restrictions:\n`
    )
  );
  [
    ...(validationResult.errors || []),
    ...(validationResult.warnings || [])
  ].forEach(error => {
    console.error(chalk.red(`  * ${error}`));
  });
  console.error(chalk.red("\nPlease choose a different project name."));
  process.exit(1);
}

inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Please choose your react app type:',
      choices:[
        'react',
        'redux',
        'mobx'
      ]
    }
  ]).then((res) => {
    const projectType = res.type
    if(!fs.existsSync(packageName)){
      try {
        createParcelReact({packageName,projectType});
      }
      catch (e) {
        console.log(e)
      }
    }else{
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please input the different name because the project name has existed:',
        }
      ]).then(res=>{
        const packageName = res.name
        createParcelReact({packageName,projectType});
      })
    }
  })


