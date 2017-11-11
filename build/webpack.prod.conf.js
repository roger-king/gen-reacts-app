const webpack = require('webpack');
const path = require('path');
const config = require('./../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    output: {
        filename: '[name].bundle.js',
        publicPath: '',
        path: path.resolve(__dirname, './../dist')
    },
    devtool: '#source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),

        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            filename: config.build.index,
            title: "React-Typescript",
            appMountId: 'root',
            inject: false,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
              },
              // necessary to consistently work with multiple chunks via CommonsChunkPlugin
              chunksSortMode: 'dependency'
        })
    ]
}

module.exports = webpackConfig;