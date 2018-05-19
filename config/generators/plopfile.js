var component = require('./component/component.generator');
var common = require('./common/common.generator');
var page = require('./page/page.generator');
var hoc = require('./hoc/hoc.generator');

module.exports = plop => {
    // plop.setPrompt('recursive', require('inquirer-recursive'));
    plop.setGenerator('init', {
        description: 'Initial run command to start project',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?',
            },
        ],
        actions: [
            {
                type: 'modify',
                path: 'src/index.html',
                pattern: 'React.js-Modern-Web-Seed',
                template: '{{title}}',
            },
            function(data) {
                let fs = require('fs');

                if (fs.existsSync('./.git')) {
                    fs.rmdir('./.git', () => {
                        console.log('REMOVE THE .git Folder');
                        console.log('Ready to start your new react project!');
                        console.log("Try running 'npm run generate' ");
                    });
                }
            },
        ],
    });
    common(plop);
    component(plop);
    page(plop);
    hoc(plop);
};
