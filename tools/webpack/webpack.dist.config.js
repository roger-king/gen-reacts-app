const webpack = require('webpack');
const path = require('path');
const common = require('./../../webpack.config');

common.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, './../../public/dist')
}

/**
 * Add the uglify plugin for production builds
 */
common.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compressor: {
        warnings: false
    }
}));

module.exports = common;