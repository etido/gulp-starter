var connect = require('connect');
var gulp    = require("gulp");
var http    = require('http');
var config  = require('../config');

gulp.task('express', function(){
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(config.root));
  app.listen(config.port);
});
