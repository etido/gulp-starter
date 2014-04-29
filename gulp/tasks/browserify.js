
var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function(){
	return browserify({
			//entries: ['./src/javascript/app.coffee','./src/javascript/test.js'],
			//extensions: ['.coffee', '.hbs','.js']
			entries: ['./src/javascript/test.js'],
			extensions: ['.js']
		})
		.require('backbone/node_modules/underscore', { expose: 'underscore' })
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'))
});
