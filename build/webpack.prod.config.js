const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, './../dist')
}

/**
 * Add the uglify plugin for production builds
 */
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compressor: {
        warnings: false
    }
}));

module.exports = config;