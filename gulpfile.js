var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function() {
    return gulp
        .src("app/scss/styles.scss") // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest("app/css"));
});
gulp.task("watch", function() {
    gulp.watch("app/scss/**/*.scss", ["sass"]);
    // Other watchers
});

gulp.task("default", ["sass"]);
