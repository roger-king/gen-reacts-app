const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackProdConfig = merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    },
    devtool: '#source-map',
    optimization: {
        splitChunks: {
            name: 'commons',
            chunks: 'all',
        },
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false,
        }),

        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            filename: path.resolve(__dirname, '../dist/index.html'),
            title: 'React-Typescript-Gen',
            appMountId: 'root',
            inject: false,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
        new webpack.HashedModuleIdsPlugin(),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'dist/assets',
                ignore: ['.*'],
            },
        ]),
    ],
});

module.exports = webpackProdConfig;
