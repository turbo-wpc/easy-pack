module.exports.var = {
    gulp : "<%require('gulp')%>",
    minifyCSS : "<%require('gulp-csso')%>",
    browserSync : "<%require('browser-sync').create()%>",
}

module.exports.config = [
    "gulp.task('css-build', ['less'], () => {\
        return gulp.src('./src/style/*.css')\
            .pipe(minifyCSS())\
            .pipe(gulp.dest('./dist/style'))\
    })",
    "gulp.task('css', () => {\
        return gulp.src('./src/style/*.css')\
            .pipe(browserSync.stream());\
    })"
]