import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';

export const writePackageJson = async (pathToPackageJson: string) => {
    const arrayOfPath = pathToPackageJson.split('/');
    const projectTitle = arrayOfPath[arrayOfPath.length - 1];
    const basePackageJson = require(path.join(path.resolve(pathToPackageJson), 'package.json'));

    const gitConfigPath = path.resolve(homedir(), '.gitconfig');
    const hasGitCredentials = fs.existsSync(gitConfigPath);

    basePackageJson.name = projectTitle;
    basePackageJson.description = `${projectTitle} - ReactJS Typescript Single Page Application`;

    if (hasGitCredentials) {
        const gitConfig = fs.readFileSync(gitConfigPath).toString();
        let author = '';
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(gitConfigPath),
        });

        lineReader.on('line', function(line) {
            if (line.indexOf('name =') > -1) {
                author += line.split('=')[1].trim();
            }

            if (line.indexOf('email =') > -1) {
                author += ` <${line.split('=')[1].trim()}>`;
            }
        });

        lineReader.on('close', () => {
            basePackageJson.author = author;
            fs.writeFileSync(
                path.join(path.resolve(pathToPackageJson), 'package.json'),
                JSON.stringify(basePackageJson),
                'utf8',
            );
        });
    } else {
        basePackageJson.author = '';

        fs.writeFileSync(
            path.join(path.resolve(pathToPackageJson), 'package.json'),
            JSON.stringify(basePackageJson),
            'utf8',
        );
    }
};
