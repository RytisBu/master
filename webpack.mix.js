let mix = require('laravel-mix');

mix.js('assets/app.js', 'js').setPublicPath('dist');
mix.sass('resources/sass/style.scss', 'css').setPublicPath('dist');
mix.options({
    processCssUrls: false
});