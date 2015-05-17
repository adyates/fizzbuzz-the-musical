var gulp = require('gulp');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');

gulp.task('default', ['mocha'], function() {
});

gulp.task('build-test', function() {
    return gulp.src(['js/*.js', 'test/*.spec.js'])
        .pipe(concat('fbtest.js'))
	.pipe(gulp.dest('build'));
});

gulp.task('mocha', ['build-test'], function() {
    return gulp.src('build/fbtest.js')
        .pipe(mocha({
            reporter: 'spec',
            globals: {
    }}));
});

gulp.task('watch', function() {
    gulp.watch(['js/**', 'test/**'], ['mocha']);
});