/**
 * Created by root on 11.08.17.
 */
const gulp = require('gulp'),
      watch = require('gulp-watch'),
      uglify = require('gulp-uglify'),
      sourceMaps = require('gulp-sourcemaps'),
      cssmin = require('gulp-minify-css'),
      imageMin = require('gulp-imagemin'),
      pngQuant = require('imagemin-pngquant'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel');




const path = {
  build: {
      js: 'assets/js/dist',
      img: 'assets/images',
      css: 'assets/css'
  },
    src: {
      js: 'assets/js/src/*.js',
      img: 'assets/images/src/*.*',
      style: 'assets/scss/common.scss'
    }
};



const config = {
    server: {
        baseDir: '/assets/'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'akira'
};


gulp.task('js:build', () => {
   gulp.src(path.src.js)
        .pipe(babel({
            presets: ['env']
        }))
       .pipe(sourceMaps.init())
       .pipe(concat('bundle.js'))
       .pipe(uglify())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest(path.build.js))
});

gulp.task('js:prod', () => {
    gulp.src(path.src.js)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', () => {
   gulp.src(path.src.style)
       .pipe(sourceMaps.init())
       .pipe(sass())
       .pipe(autoprefixer())
       .pipe(cssmin())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest(path.build.css))
});

gulp.task('style:prod', () => {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
});

gulp.task('image:build', () => {
   gulp.src(path.src.img)
       .pipe(imageMin({
           progressive: true,
           svgoPlugins: [{ removeViewBox: false }],
           use: [pngQuant()],
           interplaced: true
       }))
       .pipe(gulp.dest(path.build.img))
});

gulp.task('prod:build', () => {
    gulp.start('js:prod');
    gulp.start('style:prod');
});