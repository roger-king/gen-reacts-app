var component = require('./tools/templates/component/component.generator');
var container = require('./tools/templates/container/container.generator');
var service = require('./tools/templates/service/service.generator');


module.exports = (plop) => {
    plop.setGenerator('init', {
        description: "Initial run command to start project",
        prompts: [{
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        }],
        actions: [
            {
                type: "modify",
                path: "src/index.html",
                pattern: "React.js-Modern-Web-Seed",
                template: "{{title}}"
            }, function(data){
                let fs = require('fs');

                if(fs.existsSync('./.git')){
                    fs.rmdir('./.git', () => {
                        console.log('REMOVE THE .git Folder');
                        console.log('Ready to start your new react project!');
                        console.log('Try running \'npm run generate\' ');
                    });
                }
            }
        ]
    });
    component(plop);
    container(plop);
    service(plop);
}