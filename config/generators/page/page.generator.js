var appModuleExists = require('./../../utils').appModuleExists;

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create new Page',
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
                    path: './../../src/app/pages/__tests__/{{camelCase name}}.test.tsx',
                    templateFile: 'page/page.test.tsx.tpl',
                },
                {
                    type: 'add',
                    path: './../../src/app/pages/{{camelCase name}}.tsx',
                    templateFile: 'pagee/pageComponent.tsx.tpl',
                },
            ];

            return actions;
        },
    });
};
