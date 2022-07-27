var gulp = require('gulp'),
	//sass
		sass 	     = require('gulp-sass')(require('sass')),
		sourcemaps   = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
	//sass
	pug         = require('gulp-pug')
	concat      = require('gulp-concat'),
	uglify      = require('gulp-uglify'),
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;

//SCSS
	gulp.task('sass', done => {
	  	gulp.src('app/scss/**')
	  		.pipe(sourcemaps.init())
		    .pipe(sass().on('error', sass.logError))
		    .pipe(autoprefixer({
	            overrideBrowserslist: ['last 25 versions'],
	            cascade: false
	        }))
		    .pipe(concat('style.css'))
		    .pipe(sourcemaps.write())
		    .pipe(gulp.dest('app/css'))
		    .pipe(browserSync.stream());
		done();
	});
//SCSS

//pug
	gulp.task('pug', done => {
	  	gulp.src('app/pug/page/*.pug')
		    .pipe(pug({
	    		pretty: true,
	    	}))
	    	.pipe(gulp.dest('app'))
	    	.pipe(browserSync.stream());
	    done();	
	});
//pug

// Browser Sync
	gulp.task('serve', function () {

	    browserSync.init({
	        server: {
	            baseDir: "./app"
	        },
	        notify: false,
	    });

	    gulp.watch("app/scss/**", gulp.series('sass'));
	    gulp.watch("app/pug/**", gulp.series('pug'));
	    gulp.watch('app/js/*.js').on('change', reload);
	    gulp.watch("app/*.html").on('change', function() {
	    	console.log("Смотри браузер!"); 
 			reload(); 
	    });
	    
	});
// Browser Sync

// Scripts
	gulp.task('scripts', function() {
		return gulp.src([
				'app/libs/jquery/dist/jquery.min.js',
				'app/libs/iro.js/dist/iro.min.js',
				'app/libs/owl.carousel/dist/owl.carousel.js',
				'app/libs/jquery.maskedinput/jquery.maskedinput.min.js',
				'app/libs/fancybox/jquery.fancybox.min.js',
			])
			.pipe(concat('main.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('app/js/'));
	});
// Scripts

gulp.task('default', gulp.series('sass', 'pug', 'scripts', 'serve'));