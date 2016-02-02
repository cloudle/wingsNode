var gulp = require('gulp'),
	merge = require('utils-merge'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon'),
	browserSync = require('browser-sync').create(),

	autoprefixer = require('gulp-autoprefixer'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	jeet = require('jeet'),
	rupture = require('rupture');

gulp.task('bundle-styles', function () {
	gulp.src('./apps/manager/main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus(stylus({use: [nib(), jeet(), rupture()]})))
		.pipe(autoprefixer({}))
		.pipe(rename("bundle.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./apps/manager/distribution'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		port: 2015,
		proxy: "http://localhost:7015",
		files: ["./apps/manager/distribution/index.html"],
		open: false
	});

	gulp.watch("./apps/manager/**/*.styl", ['bundle-styles']);
});

var nodemonIgnores = [
	'apps/manager/**/*',
	'libs/**/*',
	'node_modules/**/*'
];

gulp.task('nodemon', function (callback) {
	var started = false;
	nodemon({script: 'server.js', ignore: nodemonIgnores}).on('start', function () {
		if (!started) { callback(); started = true; }
	});
});

gulp.task('default', ['bundle-styles', 'browser-sync']);