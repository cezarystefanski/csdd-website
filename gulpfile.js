// ENVIRONMENT ---------------------------------------------------------

// set this to either 'dev' or 'prod' to specify environment
var env = 'dev';

// set this to true to use font awesome in your project
// and false if you don't
var fa = true;

// set this to true to use zurb foundation in your project
// and false if you don't
var zf = true;





// PREP ----------------------------------------------------------------

// gulp modules
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyhtml = require('gulp-minify-html'),
    minifyjson = require('gulp-jsonminify'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// directory variables
var jsSources,
    sassSources,
    htmlSources,
    jsonSources,
    outputDir,
    faFontDir,
    faSassDir,
    favoIcon,
    zfJsDir,
    zfSassDir

// checks environment and sets output directories
if (env === 'dev') {
  outputDir = 'builds/development/';
} else {
  outputDir = 'builds/production/';
}

// input directories
jsSources = [
//  'components/scripts/zepto.js',
//  'node_modules/foundation/js/vendor/jquery.js',
  'components/scripts/first.js',
  'components/scripts/second.js',
  'components/scripts/MainController.js'
//  'components/scripts/foundation.js',
//  'components/scripts/foundation.alerts.js',
//  'components/scripts/foundation.clearing.js',
//  'components/scripts/foundation.cookie.js',
//  'components/scripts/foundation.dropdown.js',
//  'components/scripts/foundation.forms.js',
//  'components/scripts/foundation.joyride.js',
//  'components/scripts/foundation.magellan.js',
//  'components/scripts/foundation.orbit.js',
//  'components/scripts/foundation.placeholder.js',
//  'components/scripts/foundation.reveal.js',
//  'components/scripts/foundation.section.js',
//  'components/scripts/foundation.tooltips.js',
//  'components/scripts/foundation.topbar.js',
//  'components/scripts/foundation.interchange.js',
//  'components/scripts/*.js',
];
sassSources = ['components/sass/style.scss'];
htmlSources = ['builds/development/*.html'];
jsonSources = ['builds/development/js/*.json'];
imageSources = ['builds/development/images/**'];
favoIcon = ['builds/development/*.ico'];
faFontDir = ['node_modules/font-awesome/fonts/*'];
faSassDir = ['node_modules/font-awesome/scss/**'];
zfJsDir = [
  'node_modules/foundation/js/vendor/custom.modernizr.js',
  'node_modules/foundation/js/vendor/zepto.js',
  'node_modules/foundation/js/foundation/*.js'
];
zfSassDir = ['node_modules/foundation/scss/**'];





// TASKS ---------------------------------------------------------------

// checks code with JSHint
gulp.task('hint', function() {
  gulp.src(jsSources)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

// concatenates scripts, adds jQuery & Angular if
// required and minifies if environment is production
// also reloads on any change
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulpif((env!=='dev'), uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

// converts sass to css and minifies if environment is production
// also reloads on any change
gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: outputDir + 'images',
      style: 'nested'
    })
    .on('error', gutil.log))
    .pipe(gulpif((env!=='dev'), minifycss({compatibility: 'ie8'})))
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload())
});

// launches a node.js server with live reload
gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

// reloads on any change and minifies json if environment is production
gulp.task('json', function() {
  gulp.src(jsonSources)
    .pipe(gulpif((env!=='dev'), minifyjson()))
    .pipe(gulpif((env!=='dev'), gulp.dest(outputDir + 'js')))
    .pipe(connect.reload())
});

// reloads on any change and minifies images if environment is production
gulp.task('images', function() {
  gulp.src(imageSources)
    .pipe(gulpif((env!=='dev'), imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
    .pipe(gulpif((env!=='dev'), gulp.dest(outputDir + 'images')))
    .pipe(connect.reload())
});

// reloads on any change and minifies html if environment is production
gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(gulpif((env!=='dev'), minifyhtml()))
    .pipe(gulpif((env!=='dev'), gulp.dest(outputDir)))
    .pipe(connect.reload())
});

// reloads on any change and copies favicon from development to prduction
gulp.task('fav', function() {
  gulp.src(favoIcon)
    .pipe(gulpif((env!=='dev'), gulp.dest(outputDir)))
    .pipe(connect.reload())
});





// FONT AWESOME --------------------------------------------------------

// the if clause will check if you want fontawesome and act accordingly
if (fa) {
  gulp.task('fontawesome', function() {
    gulp.src(faFontDir)
      .pipe(gulp.dest('builds/development/fonts/'))
      .pipe(gulpif((env!=='dev'), gulp.dest(outputDir + 'fonts/')))
    gulp.src(faSassDir)
      .pipe(gulp.dest('components/sass/fontAwesome'))
  });
}
else {
gulp.task('fontawesome', function() {
  gulp.src('components/sass/faStart/*')
    .pipe(gulp.dest('components/sass/fontAwesome/'))
});
}





// ZURB FOUNDATION -----------------------------------------------------

// the if clause will check if you want foundation and act accordingly
if (zf) {
  gulp.task('foundation', function() {
    gulp.src(zfJsDir)
      .pipe(gulp.dest('components/scripts/'))
    gulp.src(zfSassDir)
      .pipe(gulp.dest('components/sass/foundation'))
  });
}
else {
gulp.task('foundation', function() {
  gulp.src('components/sass/zfStart/*')
    .pipe(gulp.dest('components/sass/foundation'))
});
}




// AUTOMATION ----------------------------------------------------------

// watches for any changes to trigger reloads
gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/**', ['compass']);
  gulp.watch(htmlSources, ['html']);
  gulp.watch(jsonSources, ['json']);
  gulp.watch(imageSources, ['images']);
  gulp.watch(favoIcon, ['fav']);
});

// default task
gulp.task('default', ['html', 'fav', 'js', 'images', 'json', 'compass', 'connect', 'watch']);