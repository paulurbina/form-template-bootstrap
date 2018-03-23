const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');


gulp.task('sass', () => {
	return gulp.src([
		'node_modules/bootstrap/scss/bootstrap.scss',
		'src/public/SCSS/*.scss'
	])
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('src/public/css'))
	.pipe(browserSync.stream());
});

gulp.task('js', () => {
	return gulp.src([
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/umd/popper.min.js'
	])
	.pipe(gulp.dest('src/public/js'))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'] , () => {
	browserSync.init({
		server: './src/public/'
	});

gulp.watch([
	'node_modules/bootstrap/scss/bootstrap.scss',
	'src/public/SCSS/*.scss'
], ['sass']);

gulp.watch('src/public/*.html').on('change', browserSync.reload);

});

gulp.task('font-awesome', () => {
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
	.pipe(gulp.dest('src/public/css'));
});

gulp.task('fonts', () => {
	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('src/public/fonts'));
});

gulp.task('default', ['js', 'serve', 'font-awesome', 'fonts']);