const gulp = require('gulp'),
    webpack = require('webpack'),
    path = require('path'),
    rename = require('gulp-rename'),
    serve = require('browser-sync'),
    eslint = require('gulp-eslint'),
    webpackDevMiddelware = require('webpack-dev-middleware'),
    webpachHotMiddelware = require('webpack-hot-middleware'),
    colorsSupported = require('supports-color'),
    config = require('config'),
    historyApiFallback = require('connect-history-api-fallback');

let root = 'src';
let resolveToApp = function resolveToApp() {
    let glob = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = function resolveToComponents() {
    let glob = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return path.join(root, 'app/components', glob); // app/components/{glob}
};
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    styl: resolveToApp('**/*.scss'), // stylesheets
    html: [resolveToApp('**/*.html'), path.join(root, 'index.html')],
    entry: path.join(__dirname, root, 'index.tsx'),
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

gulp.task('serve', function() {
    let config = require('./tools/webpack/webpack.dev.config');

    config.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
        paths.entry
    ];

    let compiler = webpack(config);
    serve({
        port: process.env.PORT || 8000,
        open: false,
        server: { baseDir: root },
        https: false,
        middleware: [historyApiFallback(), webpackDevMiddelware(compiler, {
            stats: {
                colors: colorsSupported,
                chunks: false,
                modules: false
            },
            publicPath: config.output.publicPath
        }), webpachHotMiddelware(compiler)]
    });
});

gulp.task('watch', ['serve']);

gulp.task('default', ['serve']);