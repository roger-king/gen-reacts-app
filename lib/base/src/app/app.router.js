"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var app_theme_1 = require("./app.theme");
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("./pages");
var NoMatch = function (props) { return <div className={props.className}>404 Page Not Found</div>; };
var StyledNoMatch = app_theme_1.default(NoMatch)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0 auto;\n    color: red;\n"], ["\n    margin: 0 auto;\n    color: red;\n"])));
exports.RouterContainer = function (props) { return (<react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Switch>
            <react_router_dom_1.Route path="/" component={pages_1.LoadableHomePage}/>
            <react_router_dom_1.Route component={StyledNoMatch}/>
        </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>); };
var templateObject_1;
//# sourceMappingURL=app.router.js.map