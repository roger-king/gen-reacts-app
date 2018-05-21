#!/usr/bin/env node
import * as chalk from 'chalk';
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
    .action((title, targetPath) => {
        prompt(questions[1]).then((answer: Partial<ICreateProjectOptions>) => {
            createProject(title, answer.targetPath);
        });
    });

if (!process.argv.slice(2).length) {
    prompt(questions).then((answers: ICreateProjectOptions) => {
        createProject(answers.projectTitle, answers.targetPath);
    });
}

program.parse(process.argv);
