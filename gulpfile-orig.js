var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
cssNested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();




gulp.task('default', function(){
   console.log('hooray - you just created a Gulp task'); 
});

gulp.task('html', function(){
   console.log('Imaging something useful being done to the HTML here'); 
});


gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssVars, cssNested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){ 
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});