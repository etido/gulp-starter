var gulp = require('./gulp')([
	'browserify',
	'compass',
	'images',
	'open',
	'watch',
	'express'
]);

gulp.task('build', ['browserify', 'compass', 'images']);
//gulp.task('default', ['build', 'watch', 'serve', 'open']);
gulp.task('default', ['build',  'express', 'watch','open']);
