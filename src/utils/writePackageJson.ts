import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';

export const writePackageJson = (pathToPackageJson: string) => {
    const arrayOfPath = pathToPackageJson.split('/');
    const projectTitle = arrayOfPath[arrayOfPath.length - 1];
    const basePackageJson = require(path.resolve(pathToPackageJson));

    const gitConfigPath = path.resolve(homedir(), '.gitconfig');
    let credentials: { name: string | null; email: string | null } = {
        name: null,
        email: null,
    };

    if (fs.existsSync(gitConfigPath)) {
        const gitConfig = fs.readFileSync(gitConfigPath).toString();
        const gitCredentials = gitConfig.split('name = ')[1].split('email = ');
        credentials['name'] = gitCredentials[0].trim();
        credentials['email'] = gitCredentials[1].trim();
    }
};
