var component = require('./tools/templates/component/component.generator');
var container = require('./tools/templates/container/container.generator');
var componentWithStore = require('./tools/templates/componentWithStore/component-with-store.generator');
var service = require('./tools/templates/service/service.generator');

module.exports = (plop) => {
    component(plop);
    componentWithStore(plop);
    container(plop);
    service(plop);
}