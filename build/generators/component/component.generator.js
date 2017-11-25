var appModuleExists = require('./../../utils').appModuleExists;

module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [
            {
                type: "list",
                name: "type",
                default: 'Stateless',
                message: "Select the type of component?",
                choices: () => ['Stateless', 'React.PureComponent', 'React.Component']
            },
            {
                type: "input",
                name: "name",
                message: "Component name",
                validate: (value) => {
                    if ((/.+/).test(value)) {
                        return appModuleExists(value) ? 'A component or container with this name already exists' : true;
                    }

                    return 'The name is required';
                }
            }],
        actions: function (data) {

            var actions = [{
                type: "add",
                path: "./../../src/app/components/{{camelCase name}}/{{camelCase name}}.component.css",
                templateFile: "component/component.css.tpl"
            },
            {
                type: "add",
                path: "./../../__test__/components/{{camelCase name}}/{{camelCase name}}.component.test.tsx",
                templateFile: "component/component.test.tsx.tpl"
            }
            ];

            switch (data.type) {
                case 'Stateless':
                    var component = {
                        type: "add",
                        path: "./../../src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                        templateFile: "component/component.stateless.tsx.tpl"
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.PureComponent':
                    var component = {
                        type: "add",
                        path: "./../../src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                        templateFile: "component/component.pure.tsx.tpl"
                    };
                    actions = actions.concat(component);
                    break;
                case 'React.Component':
                    var component = {
                        type: "add",
                        path: "./../../src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                        templateFile: "component/component.stateful.tsx.tpl"
                    };
                    actions = actions.concat(component);
                    break;
                default:
                    break;
            }
            
            // TODO: FIX Nested automation.
/*             if (data.nested) {
                actions.forEach((action) => {
                    let arr = action.path.split("/");
                    arr.splice(3, 0, data.nested);
                    action.path = arr.join("/");
                })
            } else {
                actions = actions.concat([{
                    type: "modify",
                    path: "./../../src/app/components/index.ts",
                    pattern: "// Global imports of all components (do not remove - will break automation!)",
                    template: "// Global imports of all components (do not remove - will break automation!)\nexport { {{pascalCase name}} } from './{{camelCase name}}/{{camelCase name}}.component';"
                }]);
            } */

            actions = actions.concat([{
                type: "modify",
                path: "./../../src/app/components/index.ts",
                pattern: "// Global imports of all components (do not remove - will break automation!)",
                template: "// Global imports of all components (do not remove - will break automation!)\nexport { {{pascalCase name}} } from './{{camelCase name}}/{{camelCase name}}.component';"
            }]);

            return actions;
        }
    })
}