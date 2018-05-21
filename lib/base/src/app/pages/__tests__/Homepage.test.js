"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var HomePage_1 = require("./../HomePage");
test('Snapshot of Home Page', function () {
    var page = react_test_renderer_1.create(<HomePage_1.default />).toJSON();
    expect(page).toMatchSnapshot();
});
//# sourceMappingURL=Homepage.test.js.map