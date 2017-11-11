const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const utils = require('./utils');
const config = require('./../config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');

const webpackConfig = merge(baseWebpackConfig, {
    devtool: "#cheap-module-eval-source-map",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, './src/**/*.spec.tsx'),
        ]),
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
    ],

    devServer: {
        port: 8000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
})
module.exports = webpackConfig;