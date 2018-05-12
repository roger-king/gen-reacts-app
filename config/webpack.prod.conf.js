const baseConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackProdConfig = merge(baseConfig, {
    loaders: [
        // Move all static assets over to dist
        new CopyWebpackPlugin([
            {
                context: path.resolve(__dirname, './../assets'),
                from: '.',
                to: 'dist/assets',
                toType: 'dir',
            },
        ]),
    ],
});

module.exports = webpackProdConfig;
