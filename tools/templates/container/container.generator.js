module.exports = (plop) => {
    plop.setGenerator("container", {
        description: "Create new container (page).",
        prompts: [{
                type: "input",
                name: "name",
                message: "What is the name of your container?"
            },
            {
                type: "confirm",
                name: "withStore",
                message: "Create store with container?"
            },
            {
                type: "input",
                name: "route",
                message: "What is the route path?"
            }
        ],
        actions: function() {
            var actions = [{
                    type: "add",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.tsx",
                    templateFile: "tools/templates/container/container.tsx.tpl"
                },
                {
                    type: "add",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.spec.tsx",
                    templateFile: "tools/templates/container/container.spec.tsx.tpl"
                },
                {
                    type: "add",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.scss",
                    templateFile: "tools/templates/container/container.scss.tpl"
                },
                {
                    type: "add",
                    path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.state.ts",
                    templateFile: "tools/templates/container/container.state.ts.tpl"
                },
                {
                    type: "modify",
                    path: "src/app/containers/index.ts",
                    pattern: "// Global imports of all containers (do not remove - will break automation!)",
                    template: "// Global imports of all containers (do not remove - will break automation!)\nexport { {{pascalCase name}}State as {{pascalCase name}} } from './{{camelCase name}}/{{camelCase name}}.state';"
                },
                {
                    type: "modify",
                    path: "src/app/router.config.ts",
                    pattern: "} from './containers';",
                    template: ", {{pascalCase name}} } from './containers';"
                },
                {
                    type: "modify",
                    path: "src/app/router.config.ts",
                    pattern: "// Import Application Containers",
                    template: "import { {{pascalCase name}} } from './containers';"
                },
                {
                    type: "modify",
                    path: "src/app/router.config.ts",
                    pattern: "states = [",
                    template: "states = [ {{pascalCase name}}, "
                },
                {
                    type: "modify",
                    path: "src/app/router.config.ts",
                    pattern: "// Register application state.",
                    template: "export const states = [{{pascalCase name}} ];"
                }
            ];

            if (data.withStore) {
                actions = actions.concat([{
                        type: "modify",
                        path: "src/app/container/{{camelCase name}}/{{camelCase name}}.container.tsx",
                        pattern: "export class ",
                        template: "@inject('{{snakeCase name}}_store')\n@observer\nexport class "
                    }, {
                        type: "modify",
                        path: "src/app/container/{{camelCase name}}/{{camelCase name}}.container.tsx",
                        pattern: "import * as React from 'react';",
                        template: "import * as React from 'react';\nimport {inject, observer} from 'mobx-react';"
                    },
                    {
                        type: "modify",
                        path: "src/app/container/{{camelCase name}}/{{camelCase name}}.container.spec.tsx",
                        pattern: ".container';",
                        template: ".container';\nimport { {{pascalCase name}}Store } from './../../services/stores';\nconst store = {\n {{snakeCase name}}: new {{pascalCase name}}()\n};\n"
                    },
                    {
                        type: "modify",
                        path: "src/app/container/{{camelCase name}}/{{camelCase name}}.container.spec.tsx",
                        pattern: /mount\((.*)\)/g,
                        template: "mount(<{{pascalCase name}} {{snakeCase name}}_store={ store.{{camelCase name}} }/>)"
                    }
                ])
            }

            return actions;
        }
    })
}