const gulp = require('gulp'),
    webpack = require('webpack'),
    path = require('path'),
    rename = require('gulp-rename'),
    serve = require('browser-sync'),
    tslint = require('gulp-tslint'),
    typedoc = require('gulp-typedoc'),
    webpackDevMiddelware = require('webpack-dev-middleware'),
    webpachHotMiddelware = require('webpack-hot-middleware'),
    colorsSupported = require('supports-color'),
    gutil = require('gulp-util'),
    inject = require('gulp-inject-string'),
    config = require('config'),
    apiConfig = config.get('api_url'),
    historyApiFallback = require('connect-history-api-fallback');

let root = 'src';
let resolveToApp = function resolveToApp() {
    let glob = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return path.join(root, 'app', glob); // app/{glob}
};

let paths = {
    styl: resolveToApp('**/*.scss'), // stylesheets
    html: [resolveToApp('**/*.html'), path.join(root, 'index.html')],
    entry: path.join(__dirname, root, 'index.tsx'),
    output: root
};

// Typedoc Configuration!
gulp.task('docs', function(){
    return gulp
        .src(["src/**/*.tsx", "src/**/*.ts"])
        .pipe(typedoc({
            config: "./tsconfig.json",
            jsx: "react",
            module: "commonjs",
            target: "es5",
            out: "public/docs/",
            name: "ReactJS Lunchbox",
            json: "public/docs/to/docs.json",

			// TypeDoc options (see typedoc docs)
			ignoreCompilerErrors: false,
			version: true,
        }));
});

// use webpack.config.js to build modules
gulp.task('build:dist', function(cb) {
    let config = require('./tools/webpack/webpack.dist.config');
    config.entry.app = paths.entry;

    gulp.src('src/app/app.constants.ts')
        .pipe(inject.replace('http://localhost:4000/api', apiConfig));

    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack]', stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
});

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
})

gulp.task('lint', function() {
    gulp.src('src/**/*.ts{,x}')
        .pipe(tslint({
            tslint: require('tslint'),
            configuration: './tslint.json'
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true,
        }))
})

gulp.task('watch', ['serve', 'lint']);

gulp.task('default', ['serve']);