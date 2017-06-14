module.exports = (plop) => {
    plop.setGenerator("container", {
        description: "Create new container (page).",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is the name of your container?"
        }],
        actions: [{
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
                path: "src/app/containers/{{camelCase name}}/{{camelCase name}}.container.scss.tsx",
                templateFile: "tools/templates/container/container.scss.tpl"
            }
        ]
    })
}