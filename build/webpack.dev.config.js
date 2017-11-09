const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.js');

const webpackConfig = merge(baseWebpackConfig, {
    output: {
        filename: "[name].bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, "src")
    },

    devtool: "#cheap-module-eval-source-map",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]
})
module.exports = webpackConfig;