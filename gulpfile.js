var gulp = require('gulp'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    reactify = require('reactify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

//browserify for ES6
gulp.task('Build',function(){
	return browserify({entries:'./components/app.jsx',extensions:['.jsx'],debug:true})
	.transform('babelify',{presets:['es2015','react']})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('build/'));
});

gulp.task('watch',function(){
	gulp.watch(['components/*.jsx','utility/*'],['Build']);
})

gulp.task('default',['Build','watch']);