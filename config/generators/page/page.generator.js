var appModuleExists = require('./../../utils').appModuleExists;

module.exports = plop => {
    plop.setGenerator('page', {
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
                    templateFile: 'page/pageComponent.tsx.tpl',
                },
            ];

            actions = actions.concat([
                {
                    type: 'modify',
                    path: './../../src/app/pages/index.tsx',
                    pattern: "import * as Loadable from 'react-loadable';",
                    template:
                        "import * as Loadable from 'react-loadable';\n\n" +
                        'export const Loadable{{pascalCase name}} = Loadable({\n' +
                        "    loader: () => import('./{{camelCase name}}'),\n" +
                        '    loading() {\n' +
                        '        return <div> loading... </div>;\n' +
                        '    },\n' +
                        '});\n',
                },
            ]);

            return actions;
        },
    });
};
