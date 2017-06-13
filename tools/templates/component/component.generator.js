module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create new shared component.",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the your component name?"
        }],
        actions: [
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.tsx",
                templateFile: "tools/templates/component/component.template.tsx"
            },
            {
                type: "add",
                path: "src/app/components/{{camelCase name}}/{{camelCase name}}.component.spec.tsx",
                templateFile: "tools/templates/component/component.template.spec.tsx"
            }
        ]

    })
}