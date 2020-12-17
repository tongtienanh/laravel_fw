let mix        = require('laravel-mix'),
    webpack    = require('webpack'),
    pathBundle = 'public/';
require('laravel-mix-merge-manifest');
mix.mergeManifest();
let build_js = [
    {
        from: 'resources/js/pages/home.js',
        to: 'js/home.js'
    },

];
let build_scss = [
    {
        from: 'resources/scss/pages/home/style.scss',
        to: 'css/home.css'
    }
];

build_js.map((file) => {
    mix.js(file.from, file.to);
});
build_scss.map((file) => {
    mix.sass(file.from, file.to).minify(pathBundle + '/' + file.to);
});

mix.webpackConfig({
    plugins: [
        new webpack.IgnorePlugin(/^codemirror$/),
    ],
    node: {
        fs: "empty"
    },
    module: {

    },
    resolve: {

    },
});

mix.setPublicPath(pathBundle);
mix.options({
    processCssUrls: false,
    terser: {
        extractComments: false,
    }
});
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});
if (mix.inProduction()) {
    mix.version();
}
// mix.disableNotifications();
// mix.copyDirectory('node_modules/summernote/dist/font', 'public/fonts');
