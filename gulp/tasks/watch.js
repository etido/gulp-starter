var gulp       = require('gulp');
//var livereload = require('gulp-livereload');
var LIVERELOAD_PORT = 35729;
var lr; 
module.exports = function(){
 
   lr = require('tiny-lr')();
   lr.listen(LIVERELOAD_PORT);
	gulp.watch('src/javascript/**/*', ['browserify']);
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('*.html',notifylivereload);
	gulp.watch('build/*',notifylivereload);
	//livereload();

};

function notifylivereload(event) {
 console.log('event notification!');
  gulp.src(event.path, {read: false})
      .pipe(require('gulp-livereload')(lr));
}
