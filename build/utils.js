'use strict'

const path = require('path');
const config = require('./../config');
const fs = require('fs');
const pageComponents = fs.readdirSync(path.join(__dirname, '../src/app/components'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../src/app/containers'));
const appModule = pageComponents.concat(pageContainers);
const Lost = require('lost');
const CSSNext = require('postcss-cssnext');
const PostCSSImport= require('postcss-import');
const PostCssNested = require('postcss-nested');
const PostCssMixins = require('postcss-mixins');

exports.assetsPath = (_path) => {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
  }

/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

exports.appModuleExists = (comp) => {
  return appModule.indexOf(comp) >= 0;
}

/**
 * PostCSS Plugins
 */
exports.postCSSPlugins = loader => [
    Lost(),
    PostCSSImport(),
    CSSNext({
        browsers: ['last 2 versions', '> 5%'],
    }),
    PostCssMixins()
  ];

 