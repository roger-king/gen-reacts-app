import * as fs from 'fs';
import * as path from 'path';
import * as child from 'child_process';

export const writeReadme = (pathToApp: string) => {
    const arrayOfPath = pathToApp.split('/');
    const projectTitle = arrayOfPath[arrayOfPath.length - 1];

    child.execSync(
        `mv ${path.join(path.resolve(pathToApp), 'README.md')} ${path.join(path.resolve(pathToApp), 'BASE.md')}`,
    );

    fs.writeFileSync(path.join(path.resolve(pathToApp), 'README.md'), `#${projectTitle}`, 'utf8');
};
