import { {{pascalCase name}}Container as {{pascalCase name}} } from './{{camelCase name}}.container';
import { ReactStateDeclaration } from '@uirouter/react';

/**
 * {{pascalCase name}}State
 * Sets the {{pascalCase name}} Container to be accessible through at "{{route}}".
 */

export const {{pascalCase name}}State: ReactStateDeclaration = {
    name: '{{camelCase name}}',
    url: '{{route}}',
    component: {{pascalCase name}}
};
