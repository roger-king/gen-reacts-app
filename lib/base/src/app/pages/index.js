"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Loadable = require("react-loadable");
exports.LoadableHomePage = Loadable({
    loader: function () { return Promise.resolve().then(function () { return require('./HomePage'); }); },
    loading: function () {
        return <div> loading...</div>;
    },
});
//# sourceMappingURL=index.js.map