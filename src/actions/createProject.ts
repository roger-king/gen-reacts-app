import * as fs from 'fs';
import * as path from 'path';
import baseProjectPackageJson from './../base/package.json';

export const createProject = (projectTitle: string, targetPath: string) => {
    const destination = targetPath.charAt(0) === '/' ? targetPath : path.resolve(__dirname, targetPath);
};
