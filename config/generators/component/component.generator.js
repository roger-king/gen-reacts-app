var appModuleExists = require('./../../utils').appModuleExists;

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create new shared component.',
        prompts: [
            {
                type: 'list',
                name: 'type',
                default: 'Stateless',
                message: 'Select the type of component?',
                choices: () => ['Stateless', 'React.PureComponent', 'React.Component', 'Styled.Component'],
            },
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
        ],
        actions: function(data) {
            var actions = [
                {
                    type: 'add',
                    path: './../../src/app/components/__tests__/{{pascalCase name}}.test.tsx',
                    templateFile: 'component/component.test.tsx.tpl',
                },
            ];

            switch (data.type) {
                case 'Stateless':
                    var component = {
                        type: 'add',
                        path: './../../src/app/components/{{pascalCase name}}.tsx',
                        templateFile: 'component/sfcComponent.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.PureComponent':
                    var component = {
                        type: 'add',
                        path: './../../src/app/components/{{pascalCase name}}.tsx',
                        templateFile: 'component/pureComponent.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.Component':
                    var component = {
                        type: 'add',
                        path: './../../src/app/components/{{pascalCase name}}.tsx',
                        templateFile: 'component/component.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'Styled.Component':
                    var component = {
                        type: 'add',
                        path: './../../src/app/components/{{pascalCase name}}.tsx',
                        templateFile: 'component/styledComponent.tsx.tpl',
                    };

                    actions = actions.concat(component);
                    break;
                default:
                    break;
            }

            return actions;
        },
    });
};
