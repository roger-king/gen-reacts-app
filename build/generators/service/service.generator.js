const inquirer = require('inquirer');

module.exports = (plop) => {
    plop.setGenerator("service", {
        description: "Create new service management",
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Service name'
            }
        ],
        actions: function(data) {
            var actions =[
                {
                    type: 'add',
                    path: '../../src/app/services/{{camelCase name}}/{{camelCase name}}.action.ts',
                    templateFile: 'service/service.action.ts.tpl'
                },
                {
                    type: 'add',
                    path: '../../src/app/services/{{camelCase name}}/{{camelCase name}}.ts',
                    templateFile: 'service/service.ts.tpl'
                },
                {
                    type: 'add',
                    path: '../src/app/services/{{camelCase name}}/{{camelCase name}}.reducer.ts',
                    templateFile: 'service/service.reducer.ts.tpl'
                },
                {
                    type: 'modify',
                    path: '../../src/app/services/reducers.ts',
                    pattern: 'import {reducer as formReducer} from \'redux-form\';',
                    template: 'import {reducer as formReducer} from \'redux-form\';\nimport {{camelCase name}} from \'./{{camelCase name}}/{{camelCase name}}.reducer\';'
                },
                {
                    type: 'modify',
                    path: '../../src/app/services/reducers.ts',
                    pattern: 'export default combineReducers({',
                    template: 'export default combineReducers({\n    {{camelCase name}},'
                },
                {
                    type: 'modify',
                    path: '../../src/app/services/states.ts',
                    pattern: '// Import INITIAL_STATE of our services',
                    template: '// Import INITIAL_STATE of our services\n\nimport { INITIAL_STATE as {{pascalCase name}}State} from \'./{{pascalCase name}}/{{pascalCase name}}.reducer\';'
                },
                {
                    type: 'modify',
                    path: '../../src/app/services/states.ts',
                    pattern: 'export default {',
                    template: 'export default {\n    {{camelCase name}}: {{pascalCase name}}State,\n'
                }
            ];

            // Try and add support for adding your types.

            return actions;
        }
    })
}