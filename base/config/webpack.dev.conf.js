const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const webpackDevConfig = merge(baseConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            title: 'React-Typescript-Gen',
            appMountId: 'root',
            inject: false,
            hash: true,
        }),
        // new webpack.EnvironmentPlugin({
        //     NODE_ENV: 'development',
        //     DEBUG: true,
        // }),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 8080,
                proxy: 'http://localhost:8000/',
                open: false,
            },
            {
                reload: false,
            },
        ),
    ],

    devServer: {
        port: 8000,
        host: 'localhost',
        historyApiFallback: true,
        open: true,
    },
});

module.exports = webpackDevConfig;
