module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [{
            type: "input",
            name: "name",
            message: "Component name"
        },
        {
            type: "confirm",
            name: "stateless",
            message: "Stateless component?"
        },
        {
            type: "confirm",
            name: "nested",
            message: "Nested component?"
        }],
        actions: function(data) {
            var component = {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.stateless.component.tsx",
                templateFile: "build/templates/component/component.tsx.tpl"
            };

            var actions = [{
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.css",
                    templateFile: "build/templates/component/component.css.tpl"
                },
                {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.test.tsx",
                    templateFile: "build/templates/component/component.test.tsx.tpl"
                }
            ];

            if (data.nested) {
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

            if (!data.stateless) {
                component = {
                    type: "add",
                    path: "src/app/components/{{camelCase name}}/{{camelCase name}}.stateful.component.tsx",
                    templateFile: "build/templates/component/component.tsx.tpl"
                };
            }

            actions = actions.concat[component];

            return actions;
        }
    })
}