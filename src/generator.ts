import * as child from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { dependencies, devDependencies } from './constants';
import { writeReadme } from './actions/writeReadme';

export interface IGenerator {
    title: string;
    options: IOptions;
    start: () => void;
}

interface IOptions {
    useNpm: boolean;
}

export class Generator implements IGenerator {
    private destination: string;

    title: string;
    options: IOptions;

    constructor(title: string, options?: IOptions) {
        this.destination = path.resolve(process.cwd());

        this.title = title;
        this.options = options;
    }

    async start() {
        const fullPathToProject = path.join(this.destination, this.title);

        // 1. Moving base project setup.
        console.log();
        console.log(`${chalk.greenBright('Moving')} base project`);
        console.log();
        child.execSync(`cp -r ${path.resolve(__dirname, 'base')} ${fullPathToProject}`);

        // 2. Move into project directory
        process.chdir(fullPathToProject);

        // 3. write readme
        writeReadme(fullPathToProject);

        // 4. Initialize Git Repository
        child.execSync(`git init`);
        child.execSync(`cp -r ${path.resolve(__dirname, 'base/.gitignore')} ${fullPathToProject}/.gitignore`);

        // 5. Initialize NPM project
        child.execSync(`npm init -y`);

        // 5. Install dependencies
        this.install(dependencies);
        this.install(devDependencies, true);

        // 6. End
        this.writeEndingMsg();
    }

    private install(deps: string[], isDev: boolean = false) {
        let { useNpm } = this.options;
        let command: 'yarn' | 'npm';
        let args: string[];

        console.log(`Installing dependencies... This can take a while.`);

        if (!useNpm) {
            // TODO: There may be a bug with yarn not being installed
            try {
                child.execSync('yarn --version');
            } catch (e) {
                useNpm = true;
            }
        }

        if (useNpm) {
            command = 'npm';
            const saveCmd = isDev ? '--save-dev' : '--save';
            args = ['install', saveCmd, '--save-exact', '--loglevel', 'error'].concat(deps);
        } else {
            command = 'yarn';
            args = isDev ? ['add', '--exact', '--dev'].concat(deps) : ['add', '--exact', '--save'].concat(deps);
        }

        child.spawnSync(command, args, { stdio: 'inherit' });
    }

    private writeEndingMsg() {
        console.log();
        console.log(`${chalk.greenBright('gen-reacTS-app')} complete!`);
        console.log();

        console.log(`${chalk.greenBright('cd')} ${this.title}`);
        console.log();

        console.log(`${chalk.greenBright('yarn')} start`);
        console.log();

        console.log(`happy ${chalk.greenBright('hacking')}!`);
        console.log();
    }
}
