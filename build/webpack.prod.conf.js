const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.conf');

const webpackConfig = {
    output = {
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
            filename: process.env.NODE_ENV === 'testing'
              ? 'index.html'
              : config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
          }),
    ]
}

module.exports = webpackConfig;