#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var fs = require("fs");
var path = require("path");
var program = require("commander");
var inquirer_1 = require("inquirer");
var actions_1 = require("./actions");
var questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter project title...',
    },
    {
        type: 'input',
        name: 'targetPath',
        message: 'Enter path to application...',
        default: process.cwd(),
    },
];
program
    .version('1.0.0')
    .description('generate reacts (typescript) application')
    .option('<app-title>', 'title of application')
    .option('-p, --path', 'path to generate project');
program
    .command('*')
    .option('-p, --path', 'path to generate project')
    .action(function (title, targetPath) {
    inquirer_1.prompt(questions[1]).then(function (answers) {
        if (fs.existsSync(path.resolve(answers.targetPath, title))) {
            console.log(chalk_1.default.red('Already exists'));
            program.outputHelp();
            process.exit(1);
        }
        actions_1.createProject(title, answers.targetPath);
    });
});
if (!process.argv.slice(2).length) {
    inquirer_1.prompt(questions).then(function (answers) {
        if (fs.existsSync(path.resolve(answers.targetPath, answers.projectTitle))) {
            console.log(chalk_1.default.red('Already exists'));
            program.outputHelp();
            process.exit(1);
        }
        actions_1.createProject(answers.projectTitle, answers.targetPath);
    });
}
program.parse(process.argv);
//# sourceMappingURL=index.js.map