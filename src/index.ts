#!/usr/bin/env node
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import * as program from 'commander';
import { prompt } from 'inquirer';
import { Generator } from './generator';
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
    .option('--use-npm', 'use npm over yarn');

program.command('*').action(title => {
    if (fs.existsSync(path.resolve(process.cwd(), title))) {
        console.log(chalk.red('Already exists'));
        program.outputHelp();
        process.exit(1);
    }
    new Generator(title, { useNpm: false }).start();
});

// TODO: Re-Prompt if answer for projectTile is null
if (!process.argv.slice(2).length) {
    console.log();
    console.log(chalk.red('Already exists'));
    console.log();
    program.outputHelp();
    process.exit(1);
}

program.parse(process.argv);
