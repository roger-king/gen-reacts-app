module.exports = (plop) => {
    plop.setGenerator("service", {
        description: "Create new service management",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Please provide the name of the new service."
            }],
        actions: function(data) {
            var actions =[
                {
                    type: 'add',
                    path: 'src/app/service/{{camelCase name}}/{{camelCase name}}.action.ts',
                    templateFile: 'build/templates/service/service.action.ts.tpl'
                },
                {
                    type: 'add',
                    path: 'src/app/service/{{camelCase name}}/{{camelCase name}}.ts',
                    templateFile: 'build/templates/service/service.ts.tpl'
                },
                {
                    type: 'add',
                    path: 'src/app/service/{{camelCase name}}/{{camelCase name}}.reducer.ts',
                    templateFile: 'build/templates/service/service.reducer.ts.tpl'
                },
                {
                    type: 'modify',
                    path: 'src/app/service/reducers.ts',
                    pattern: 'import formReducer from \'redux-form\';',
                    template: 'import formReducer from \'redux-form\';\nimport {{camelCase name}} from \'./{{camelCase name}}/{{camelCase name}}.reducer\';'
                },
                {
                    type: 'modify',
                    path: 'src/app/service/reducers.ts',
                    pattern: 'export default combineReducers({',
                    template: 'export default combineReducers({\n    {{camelCase name}},'
                }
            ];

            return actions;
        }
    })
}