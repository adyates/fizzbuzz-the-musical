var gulp = require('gulp');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');

var JS_SRCDIR = 'js/';
var JS_SOURCE = JS_SRCDIR + '*.js';
var JS_TESTDIR = 'test/';
var JS_TEST = JS_TESTDIR + '*.spec.js';
var BUILD_DIR = 'build/';
var TEST_TARGET = 'fbtest.js';

gulp.task('default', ['mocha'], function() {});

gulp.task('build-test', function() {
	return gulp.src([JS_SOURCE, JS_TEST])
	.pipe(concat(TEST_TARGET))
	.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('mocha', ['build-test'], function() {
	return gulp.src([BUILD_DIR, TEST_TARGET].join(''))
	.pipe(mocha({
		reporter: 'spec'
	}));
});

gulp.task('watch', function() {
	gulp.watch([JS_SRCDIR + '**', JS_TESTDIR + '**'], ['mocha']);
});