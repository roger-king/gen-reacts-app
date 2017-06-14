module.exports = (plop) => {
    plop.setGenerator("service", {
        description: "Create a new service.",
        prompts: [{
            type: "input",
            name: "name",
            message: "What would you like to call your service?"
        }],
        actions: [{
                type: "add",
                path: "src/app/services/{{camelCase name}}/{{camelCase name}}.service.ts",
                templateFile: "tools/templates/service/service.ts.tpl"
            },
            {
                type: "add",
                path: "src/app/services/{{camelCase name}}/{{camelCase name}}.spec.ts",
                templateFile: "tools/templates/service/service.spec.ts.tpl"
            },
            {
                type: "add",
                path: "src/app/services/{{camelCase name}}/{{camelCase name}}.model.ts",
                templateFile: "tools/templates/service/service.model.ts.tpl"
            },
            {
                type: "add",
                path: "src/app/services/{{camelCase name}}/{{camelCase name}}.store.ts",
                templateFile: "tools/templates/service/service.store.ts.tpl"
            }
        ]
    })
}