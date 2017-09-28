let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/sass/app.scss', 'public/css')
 .sass('resources/assets/sass/bootstrap/bootstrap.scss', 'public/css')
 .options({
 	processCssUrls: false
 })
 .js('resources/assets/js/custom.js','public/js')
 .babel([
 	'resources/assets/js/jquery-3.2.1.js',
 	'resources/assets/js/tether.js',
 	'resources/assets/js/bootstrap.js',
 	'resources/assets/js/lightbox.js',
 	'resources/assets/js/owl.carousel.js',
 	'resources/assets/js/fotorama.js'
 	],'public/js/lib.js');