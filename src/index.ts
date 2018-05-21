#!/usr/bin/env node
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import * as program from 'commander';
import { prompt } from 'inquirer';
import { createProject } from './actions';
import { create } from 'domain';
interface IQuestions {
    type: string;
    name: string;
    message: string;
    default?: string;
}

interface ICreateProjectOptions {
    projectTitle: string;
    targetPath: string;
}

const questions: IQuestions[] = [
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
    .action((title, targetPath) => {
        prompt(questions[1]).then((answers: Partial<ICreateProjectOptions>) => {
            if (fs.existsSync(path.resolve(answers.targetPath, title))) {
                console.log(chalk.red('Already exists'));
                program.outputHelp();
                process.exit(1);
            }

            createProject(title, answers.targetPath);
        });
    });

if (!process.argv.slice(2).length) {
    prompt(questions).then((answers: ICreateProjectOptions) => {
        if (fs.existsSync(path.resolve(answers.targetPath, answers.projectTitle))) {
            console.log(chalk.red('Already exists'));
            program.outputHelp();
            process.exit(1);
        }

        createProject(answers.projectTitle, answers.targetPath);
    });
}

program.parse(process.argv);
