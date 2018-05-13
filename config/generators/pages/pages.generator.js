var appModuleExists = require('./../../utils').appModuleExists;

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create new shared component.',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'title of page',
                validate: value => {
                    if (/.+/.test(value)) {
                        return appModuleExists(value) ? 'This page already exists' : true;
                    }

                    return 'The title is required';
                },
            },
        ],
        actions: function(data) {
            var actions = [
                {
                    type: 'add',
                    path: './../../src/app/pages/__tests__/{{camelCase name}}.component.test.tsx',
                    templateFile: 'pages/page.test.tsx.tpl',
                },
                {
                    type: 'add',
                    path: './../../src/app/pages/{{camelCase name}}.tsx',
                    templateFile: 'pages/pageComponent.tsx.tpl',
                },
            ];

            return actions;
        },
    });
};
