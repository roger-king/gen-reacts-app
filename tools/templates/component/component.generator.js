module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the your component name?"
        }],
        actions: [{
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                templateFile: "tools/templates/component/component.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                templateFile: "tools/templates/component/component.spec.tsx.tpl"
            },
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.scss",
                templateFile: "tools/templates/component/component.scss.tpl"
            }
        ]
    })
}