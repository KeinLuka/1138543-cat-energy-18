"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var terser = require("gulp-terser");

gulp.task("css", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("index", function () {
  return gulp.src("source/js/main/*.js")
    .pipe(plumber())
    .pipe(concat("index.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(terser())
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("vendor", function () {
  return gulp.src("source/js/vendor/*.js")
    .pipe(plumber())
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(terser())
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/js/*.js", gulp.series("index", "refresh"));
  gulp.watch("source/sass/**/*.{sass,scss}", gulp.series("css", "refresh"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("html", function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task("images", function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('source/img'));
});

gulp.task("webp", function () {
  return gulp.src('source/img/content__image/*.{png,jpg}')
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest('source/img/content__image'));
});

gulp.task("sprite", function () {
  return gulp.src('source/img/svg/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/svg"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**",
      "source/img/**",
      "source/*.ico"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "vendor", "sprite", "html", "index"));
gulp.task("start", gulp.series("build", "server"));
