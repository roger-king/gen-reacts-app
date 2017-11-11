const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');

const webpackConfig = merge(baseWebpackConfig, {
    devtool: "#cheap-module-eval-source-map",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            title: "React-Typescript",
            appMountId: 'root',
            inject: false,
            hash: true
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]
})
module.exports = webpackConfig;