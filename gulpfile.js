const gulp = require('gulp');
const imageResize = require('gulp-image-resize');

gulp.task('desktop',function () {
    gulp.src(["img/main-img.jpg"])
        .pipe(imageResize({
            width : 1110,
            height : 200,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('img/desktop'));
});


gulp.task('mobile',function () {
    gulp.src("img/main-img.jpg")
        .pipe(imageResize({
            width : 300,
            height : 200,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('img/mobile'));
});


gulp.task('ipad', function () {
    gulp.src("img/main-img.jpg")
        .pipe(imageResize({
            width : 700,
            height : 200,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('img/ipad'));
});

gulp.task('logo', function () {
    gulp.src("img/udacity.svg")
        .pipe(imageResize({
            width : 50,
            height : 50,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('img/desktop'));
});

gulp.task('item-imgs', function () {
    gulp.src("img/udacity.svg")
        .pipe(imageResize({
            width : 50,
            height : 50,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('img/desktop'));
});

gulp.task('default',['mobile','ipad','desktop','logo']);