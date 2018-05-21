"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child = require("child_process");
var path = require("path");
var writePackageJson_1 = require("./../utils/writePackageJson");
exports.createProject = function (projectTitle, targetPath) {
    var baseProjectPath = path.resolve(__dirname, '../base');
    var destination = targetPath.charAt(0) === '/' ? path.resolve(targetPath, projectTitle) : path.resolve(__dirname, targetPath);
    child.execSync("cp -r " + baseProjectPath + " " + destination);
    writePackageJson_1.writePackageJson(destination);
};
//# sourceMappingURL=createProject.js.map