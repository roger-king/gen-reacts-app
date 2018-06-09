import * as child from 'child_process';
import chalk from 'chalk';
import * as path from 'path';
import { writePackageJson } from './../utils/writePackageJson';
import { writeReadme } from './../utils/writeReadme';

export const baseProjectPath = path.resolve(__dirname, '../base');

export const createProject = async (projectTitle: string, targetPath: string) => {
    child.execSync(`cp -r ${baseProjectPath} ${targetPath}`);

    await writePackageJson(targetPath);
    writeReadme(targetPath);

    console.log(chalk.greenBright(`Your application can be found here: ${targetPath}`));
    console.log(chalk.greenBright(`Install dependencies: yarn install`));
    console.log(chalk.greenBright(`Run local dev environment: yarn dev`));
    console.log(chalk.greenBright(`Checkout the readme for more commands.`));
    console.log(chalk.greenBright(`Happy hacking :)`));
};
