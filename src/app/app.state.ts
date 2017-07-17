import { App } from './app';
import { ReactStateDeclaration } from '@uirouter/react';

/**
 * {{pascalCase name}}State
 * Sets the {{pascalCase name}} Container to be accessible through at "{{route}}".
 */

export const AppState: ReactStateDeclaration = {
    name: 'app',
    component: App
};