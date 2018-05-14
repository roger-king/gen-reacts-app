var appModuleExists = require('./../../utils').appModuleExists;
var fs = require('fs');
var path = require('path');
var readLine = require('readline');

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
            {
                type: 'input',
                name: 'uri',
                message: 'URI',
            },
        ],
        actions: function(data) {
            var actions = [];
            var actions = [
                {
                    type: 'add',
                    path: './../../src/app/pages/__tests__/{{camelCase name}}.test.tsx',
                    templateFile: 'page/page.test.tsx.tpl',
                },
                {
                    type: 'add',
                    path: './../../src/app/pages/{{camelCase name}}Page.tsx',
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
                        "    loader: () => import('./{{camelCase name}}Page'),\n" +
                        '    loading() {\n' +
                        '        return <div> loading... </div>;\n' +
                        '    },\n' +
                        '});',
                },

                // Linting error will occur on the component because of how plop will parsefor the name variable
                {
                    type: 'modify',
                    path: './../../src/app/app.router.tsx',
                    pattern: '        <Switch>',
                    template:
                        '        <Switch>\n' +
                        '            <Route path="{{uri}}" component={ Loadable{{pascalCase name}} } />\n',
                },
            ]);

            const lineReader = readLine.createInterface({
                input: fs.createReadStream(path.resolve(__dirname, '../../../src/app/app.router.tsx')),
            });
            lineReader.on('line', line => {
                if (line.includes("} from './pages';")) {
                    actions = actions.concat([
                        {
                            type: 'modify',
                            path: './../../src/app/app.router.tsx',
                            pattern: "} from './pages';",
                            template: ", Loadable{{pascalCase name}} } from './pages';",
                        },
                    ]);
                } else {
                    actions = actions.concat([
                        {
                            type: 'modify',
                            path: './../../src/app/app.router.tsx',
                            pattern: "import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';",
                            template:
                                "import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';\nimport { Loadable{{pascalCase name}} } from './pages';",
                        },
                    ]);
                }
            });

            return actions;
        },
    });
};
