module.exports = (plop) => {
    plop.setGenerator("container", {
        description: "Create new container (page).",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the name of your container?"
        },
        {
            type: "input",
            name: "route",
            message: "What is the route path?"
        },
        {
            type: "confirm",
            name: "withStore",
            message: "Create store with container?"
        }
        ],
        actions: function (data) {
            var actions = [{
                type: "add",
                path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.tsx",
                templateFile: "build/templates/container/container.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.test.tsx",
                templateFile: "build/templates/container/container.test.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.css",
                templateFile: "build/templates/container/container.css.tpl"
            },
            {
                type: "add",
                path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.route.ts",
                templateFile: "build/templates/container/container.route.ts.tpl"
            },
            {
                type: "modify",
                path: "src/app/containers/index.ts",
                pattern: "// Global imports of all containers (do not remove - will break automation!)",
                template: "// Global imports of all containers (do not remove - will break automation!)\nimport { {{pascalCase name}}Route } from './{{camelCase name}}/{{camelCase name}}.route';"
            },
            {
                type: "modify",
                path: "src/app/containers/index.ts",
                pattern: "];",
                template: ", {{pascalCase name}}Route];"
            },
            {
                type: "modify",
                path: "src/app/containers/index.ts",
                pattern: "// export default []",
                template: "export default [{{pascalCase name}}Route];"
            }
            ];

            if (data.withStore) {
                actions = actions.concat([{
                    type: "modify",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.tsx",
                    pattern: "export class ",
                    template: "@inject('{{snakeCase name}}_store')\n@observer\nexport class "
                }, {
                    type: "modify",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.tsx",
                    pattern: "import * as React from 'react';",
                    template: "import * as React from 'react';\nimport {inject, observer} from 'mobx-react';"
                },
                {
                    type: "modify",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.spec.tsx",
                    pattern: ".container';",
                    template: ".container';\nimport { {{pascalCase name}}Store } from './../../services/stores';\nconst store = {\n {{snakeCase name}}: new {{pascalCase name}}()\n};\n"
                },
                {
                    type: "modify",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.spec.tsx",
                    pattern: /mount\((.*)\)/g,
                    template: "mount(<{{pascalCase name}} {{snakeCase name}}_store={ store.{{camelCase name}} }/>)"
                }
                ])
            }

            if (data.route === "/") {
                actions = actions.concat([{
                    type: "modify",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.route.ts",
                    pattern: "exact: false,",
                    template: "exact: true,"
                }])
            }

            return actions;
        }
    })
}