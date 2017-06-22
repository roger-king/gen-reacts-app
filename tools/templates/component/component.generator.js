const service = require('./../service/service.generator');

module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the your component name?"
            }, {
                type: "confirm",
                name: "withStore",
                message: "Create store with component?"
            }
        ],
        actions: function (data) {
            var actions = [
                {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                    templateFile: "tools/templates/component/component.tsx.tpl"
                }, {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.scss",
                    templateFile: "tools/templates/component/component.scss.tpl"
                },
                {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                    templateFile: "tools/templates/component/component.spec.tsx.tpl"
                }
            ];
            
            if (data.withStore) {
                actions = actions.concat([
                {
                    type: "modify",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                    pattern: "export class ",
                    template: "@inject('{{snakeCase name}}_store')\n@observer\nexport class "
                },{
                    type: "modify",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                    pattern: "import * as React from 'react';",
                    template: "import * as React from 'react';\nimport {inject, observer} from 'mobx-react';"
                },
                {
                    type: "modify",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                    pattern: ".component';",
                    template: ".component';\nimport { {{pascalCase name}}Store } from './../../services/stores';\nconst store = {\n {{snakeCase name}}: new {{pascalCase name}}()\n};\n"
                },
                {
                    type: "modify",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                    pattern: /mount\((.*)\)/g,
                    template: "mount(<{{pascalCase name}} {{snakeCase name}}_store={ store.{{camelCase name}} }/>);"
                }
                ])
            }

            actions = actions.concat([
                {
                    type: "modify",
                    path: "src/app/components/index.ts",
                    pattern: "// Global imports of all components (do not remove - will break automation!)",
                    template: "// Global imports of all components (do not remove - will break automation!)\nexport { {{pascalCase name}}Component } from './{{camelCase name}}/{{camelCase name}}.component';"
                }
            ]);
            
            return actions;
        }
    })
}
