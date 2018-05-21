var fs = require('fs');
var path = require('path');
var appModuleExists = require('./../../utils').appModuleExists;
var removeGitkeep = require('./../../utils').removeGitkeep;

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
                type: 'list',
                name: 'parent',
                message: 'Parent folder:',
                default: 'New Component',
                choices: function() {
                    const choices = ['New Component'].concat(
                        fs.readdirSync(path.join(__dirname, '../../../src/app/components')),
                    );
                    const testIndex = choices.indexOf('__tests__');
                    const gitkeepIndex = choices.indexOf('.gitkeep');

                    if (testIndex > -1) choices.splice(testIndex, 1);
                    if (gitkeepIndex > -1) choices.splice(gitkeepIndex, 1);

                    return choices;
                },
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
                validate: value => {
                    if (/.+/.test(value)) {
                        console.log(value);
                        return appModuleExists(value) ? 'A component with this name already exists' : true;
                    }

                    return 'The name is required';
                },
            },
        ],
        actions: function(data) {
            var folderPath =
                data.parent === 'New Component'
                    ? './../../src/app/components/{{pascalCase name}}'
                    : './../../src/app/components/{{parent}}/{{pascalCase name}}';
            const componentPath = folderPath + '{{pascalCase name}}.tsx';

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
                        path: componentPath,
                        templateFile: 'component/sfcComponent.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.PureComponent':
                    var component = {
                        type: 'add',
                        path: componentPath,
                        templateFile: 'component/pureComponent.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.Component':
                    var component = {
                        type: 'add',
                        path: componentPath,
                        templateFile: 'component/component.tsx.tpl',
                    };
                    actions = actions.concat(component);
                    break;
                case 'Styled.Component':
                    var component = {
                        type: 'add',
                        path: componentPath,
                        templateFile: 'component/styledComponent.tsx.tpl',
                    };

                    actions = actions.concat(component);
                    break;
                default:
                    break;
            }

            removeGitkeep('components');

            return actions;
        },
    });
};
