#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var inquirer_1 = require("inquirer");
var questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter project title...',
    },
    {
        type: 'input',
        name: 'path',
        message: 'Enter path to application...',
        default: process.cwd(),
    },
];
program
    .version('1.0.0')
    .description('generate reacts (typescript) application')
    .option('-p, --path', 'path to generate project');
program
    .command('*')
    .option('-p, --path', 'path to generate project')
    .action(function (title, targetPath) {
    // createProject(args);
    console.log(title + targetPath);
});
if (!process.argv.slice(2).length) {
    inquirer_1.prompt(questions).then(function (answers) {
        console.log(answers);
    });
}
program.parse(process.argv);
//# sourceMappingURL=index.js.map