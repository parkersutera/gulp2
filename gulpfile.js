const gulp = require('gulp');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

// Handlebars plugins
const handlebars = require('gulp-handlebars');
const handlebarsLib = require('handlebars');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');


// FIle Paths
var DIST_PATH = 'public/dist'
var SCRIPTS_PATH = 'public/scripts/**/*.js'
var CSS_PATH = 'public/css/**/*.css'
var TEMPLATES_PATH = 'templates/**/*.hbs'

// // Styles regular css
// gulp.task('styles', (finish) => {
//     console.log('starting styles task');
//     return gulp.src(['public/css/reset.css', CSS_PATH])
//         .pipe(plumber( function(err) {
//             console.log('Styles Task Error');
//             console.log(err);
//             this.emit('end');
//         }))
//         .pipe(sourcemaps.init())
//         .pipe(autoprefixer())
//         .pipe(concat('styles.css'))
//         .pipe(minifyCss())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(DIST_PATH))
//         .pipe(livereload());
//     finish();
// });

// Styles for SCSS
gulp.task('styles', (finish) => {
    console.log('starting styles task');
    return gulp.src('public/scss/styles.scss')
        .pipe(plumber( function(err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({
            outputStyle: 'compressed'
        }
        ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
    finish();
});

// Scripts
gulp.task('scripts', (finish) => {
    console.log('starting scripts task');

    return gulp.src(SCRIPTS_PATH) //search for js files to condense
        .pipe(plumber(function(err) {
            console.log('scripts task error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        // .pipe(uglify())               // 'uglify' it to condense
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))   // save them into a public/dest folder
        .pipe(livereload());
    finish();
});
// Images
gulp.task('images', (finish) => {
    console.log('starting images task');
    finish();
});

// Templates task
gulp.task('templates', (done) => {
    return gulp.src(TEMPLATES_PATH)
        .pipe(handlebars({
            handlebars: handlebarsLib
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'templates',
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
    done();
});

gulp.task('watch', (done) => {
    console.log('starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, gulp.series('scripts'));
    // gulp.watch(CSS_PATH, gulp.series('styles'));
    gulp.watch('public/scss/**/*.scss', gulp.series('styles'));
    gulp.watch(TEMPLATES_PATH, gulp.series('templates'));
    done();
})


gulp.task('default', gulp.parallel('images','templates','styles','scripts','watch'), (finish) => {
    console.log('starting default task');
    finish();
});