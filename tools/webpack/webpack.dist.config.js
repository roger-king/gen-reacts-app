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
    mangle: true
}));

/**
 * Swap React for react-lite in production
 */
/*common.resolve = {
    alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    }
};*/

module.exports = common;