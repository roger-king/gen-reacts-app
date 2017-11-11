const service = require('./../service/service.generator');

module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the your component name?"
        }, {
            type: "input",
            name: "nested",
            message: "Is this a nested component? (if yes - provide parent component name; if no - type \'n\')"
        }],
        actions: function(data) {
            var actions = [{
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                    templateFile: "build/templates/component/component.tsx.tpl"
                }, {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.css",
                    templateFile: "build/templates/component/component.css.tpl"
                },
                {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                    templateFile: "build/templates/component/component.spec.tsx.tpl"
                }
            ];

            if (data.nested != "n") {
                actions.forEach((action) => {
                    let arr = action.path.split("/");
                    arr.splice(3, 0, data.nested);
                    action.path = arr.join("/");
                })
            } else {
                actions = actions.concat([{
                    type: "modify",
                    path: "src/app/components/index.ts",
                    pattern: "// Global imports of all components (do not remove - will break automation!)",
                    template: "// Global imports of all components (do not remove - will break automation!)\nexport { {{pascalCase name}} } from './{{camelCase name}}/{{camelCase name}}.component';"
                }]);
            }

            return actions;
        }
    })
}