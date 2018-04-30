var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
   console.log('hooray - you just created a Gulp task'); 
});

gulp.task('html', function(){
   console.log('Imaging something useful being done to the HTML here'); 
});

gulp.task('styles', function(){
   console.log('Imaging SASS or postCSS tasks being done here'); 
});

gulp.task('watch', function(){
    
   watch('./app/index.html', function(){
       gulp.start('html');
   });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});