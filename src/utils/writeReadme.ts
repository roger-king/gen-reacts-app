import * as fs from 'fs';
import * as path from 'path';

export const writeReadme = (pathToPackageJson: string) => {
    const arrayOfPath = pathToPackageJson.split('/');
    const projectTitle = arrayOfPath[arrayOfPath.length - 1];

    fs.writeFileSync(path.join(path.resolve(pathToPackageJson), 'README.md'), `#${projectTitle}`, 'utf8');
};
