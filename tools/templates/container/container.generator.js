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
                path: "src/app/routes.tsx",
                pattern: "} from './containers';",
                template: ", {{pascalCase name}} } from './containers';"
            },
            {
                type: "modify",
                path: "src/app/routes.tsx",
                pattern: "// Import Application Containers",
                template: "import { {{pascalCase name}} } from './containers';"
            },
            {
                type: "modify",
                path: "src/app/routes.tsx",
                pattern: "<App>",
                template: "<App>\n     <Route exact={true} path=\"/{{route}}\" component={ {{pascalCase name}} }/>"
            }
        ]
    })
}