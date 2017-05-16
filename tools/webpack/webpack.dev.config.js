const webpack = require('webpack');
const path = require('path');
const config = require('./../../webpack.config.js');

config.output = {
    filename: "[name].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "src")
};

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;