'use strict';

const path = require('path');
const fs = require('fs');
const pageComponents = fs.readdirSync(path.join(__dirname, '../src/app/components'));
const pagePages = fs.readdirSync(path.join(__dirname, '../src/app/pages'));
const pageHocs = fs.readdirSync(path.join(__dirname, '../src/app/hocs'));
const appModule = pageComponents.concat(pagePages, pageHocs);

exports.assetsPath = _path => {
    const assetsSubDirectory = 'static';
    return path.posix.join(assetsSubDirectory, _path);
};

/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

exports.appModuleExists = comp => {
    return appModule.indexOf(comp) >= 0;
};

/**
 * PostCSS Plugins
 */
exports.postCSSPlugins = loader => [
    Lost(),
    PostCSSImport(),
    CSSNext({
        browsers: ['last 2 versions', '> 5%'],
    }),
    PostCssMixins(),
];

/**
 * Remove .GitKeep
 */

exports.removeGitkeep = dir => {
    const gitkeepPath = path.resolve(__dirname, '../src/app', dir, '.gitkeep');

    if(fs.existsSync(gitkeepPath)){
        fs.unlinkSync(gitkeepPath);
    }
}
