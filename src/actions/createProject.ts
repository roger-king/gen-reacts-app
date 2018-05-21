import * as child from 'child_process';
import * as path from 'path';
import { writePackageJson } from './../utils/writePackageJson';

export const baseProjectPath = path.resolve(__dirname, '../base');

export const createProject = (projectTitle: string, targetPath: string) => {
    const destination =
        targetPath.charAt(0) === '/' ? path.resolve(targetPath, projectTitle) : path.resolve(__dirname, targetPath);

    child.execSync(`cp -r ${baseProjectPath} ${destination}`);
    writePackageJson(destination);
};
