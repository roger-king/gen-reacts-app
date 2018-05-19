var appModuleExists = require('./../../utils').appModuleExists;
var removeGitkeep = require('./../../utils').removeGitkeep;
var fs = require('fs');

module.exports = plop => {

    plop.setGenerator('common', {
        description: 'Create new shared common component.',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
                validate: value => {
                    if (/.+/.test(value)) {
                        return appModuleExists(value) ? 'A component or container with this name already exists' : true;
                    }

                    return 'The name is required';
                },
            },
            {
                type: 'confirm',
                name: 'styled',
                message: 'Is this a styled component?',
                validate: value => {
                    if (/.+/.test(value)) {
                        return appModuleExists(value) ? 'A component or container with this name already exists' : true;
                    }

                    return 'The name is required';
                }
            },
        ],
        actions: function(data) {
            var actions = [
                {
                    type: 'add',
                    path: './../../src/app/commons/__tests__/{{pascalCase name}}.test.tsx',
                    templateFile: 'common/commons.test.tsx.tpl',
                },
            ];

            if(data.styled) {
                var component = {
                    type: 'add',
                    path: './../../src/app/commons/{{pascalCase name}}.tsx',
                    templateFile: 'common/styledComponent.tsx.tpl',
                };

                actions = actions.concat(component);
            
                return actions
            }

            var component = {
                type: 'add',
                path: './../../src/app/commons/{{pascalCase name}}.tsx',
                templateFile: 'common/sfcComponent.tsx.tpl',
            };

            actions = actions.concat(component);

            removeGitkeep('commons');

            return actions;
        },
    });
};
