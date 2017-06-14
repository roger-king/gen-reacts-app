module.exports = (plop) => {
    plop.setGenerator("component with store", {
        description: "Create new shared component with a store.",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the name of your component and store?"
        }],
        actions: [{
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                templateFile: "tools/templates/componentWithStore/component-with-store.component.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                templateFile: "tools/templates/componentWithStore/component-with-store.spec.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.scss",
                templateFile: "tools/templates/componentWithStore/component-with-store.scss.tpl"
            }
        ]
    })
}