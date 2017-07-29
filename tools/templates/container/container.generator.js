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
        actions: function(data) {
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
                    type: "modify",
                    path: "src/app/containers/index.ts",
                    pattern: "// Global imports of all containers (do not remove - will break automation!)",
                    template: "// Global imports of all containers (do not remove - will break automation!)\nexport { {{pascalCase name}}Container as {{pascalCase name}} } from './{{camelCase name}}/{{camelCase name}}.container';"
                },
                {
                    type: "modify",
                    path: "src/app/app.routes.tsx",
                    pattern: " } from './containers';",
                    template: ", {{pascalCase name}} } from './containers';"
                },
                {
                    type: "modify",
                    path: "src/app/app.routes.tsx",
                    pattern: "// Import Application Routes",
                    template: "import { {{pascalCase name}} } from './containers';"
                }
            ];

            var routeObject = {
                type: "modify",
                path: "src/app/app.routes.tsx",
                pattern: "<main>",
                template: "<main>\n    <Route path=\"{{route}}\" component={ {{pascalCase name}} }/>"
            };

            if (data.route === "/") {
                routeObject.template = "<main>\n        <Route exact path=\"{{route}}\" component={ {{pascalCase name}} }/>"
            }

            actions = actions.concat([routeObject]);

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

            return actions;
        }
    })
}