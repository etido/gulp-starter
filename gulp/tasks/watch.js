var gulp = require('gulp');
var config = require('../config');
var lr; 
gulp.task('watch', function(){
	lr = require('tiny-lr')();
    lr.listen(config.livereloadport);
	gulp.watch('src/javascript/**/*', ['browserify']);
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('*.html',notifylivereload);
	gulp.watch('build/**',notifylivereload);
});

function notifylivereload(event) {
 console.log('event notification!');
  gulp.src(event.path, {read: false})
      .pipe(require('gulp-livereload')(lr));
}
