const { src, dest, task, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const pngquant = require("gulp-pngquant");
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

const config = require("./config.js");

function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: config.paths.dist.base,
    },
    port: config.config.port || 5000,
  });
  done();
}

function previewReload(done) {
  console.log("\n\t" + "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

function html(cb) {
  src("./src/index.ejs")
    .pipe(ejs(config.site))
    .pipe(
      rename({
        extname: ".html",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
  cb();
}

function png() {
  return src(`${config.paths.src.img}/**/*.png`, {base: config.paths.src.img})
    .pipe(
      pngquant({
        quality: "65-80",
      })
    )
    .pipe(dest(config.paths.dist.img));
}

function svg() {
  return src(`${config.paths.src.img}/**/*.svg`, {base: config.paths.src.img})
    .pipe(dest(config.paths.dist.img));
}

function jpg() {
  return src(`${config.paths.src.img}/**/*.jpg`, {base: config.paths.src.img})
    .pipe(imagemin())
    .pipe(dest(config.paths.dist.img));
}

function styles() {
  const tailwindcss = require("tailwindcss");
  return src(`${config.paths.src.scss}/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(dest(config.paths.src.css))
    .pipe(
      postcss([
        tailwindcss(config.config.tailwindjs),
        require("autoprefixer"),
        require("cssnano")({
          preset: "default",
        }),
      ])
    )
    .pipe(concat({ path: "style.css" }))
    .pipe(dest(config.paths.dist.css));
}

function watchFiles() {
  watch(`${config.paths.src.base}/**/*.ejs`, series(html, previewReload));
  watch(`${config.paths.src.base}/**/*.png`, series(png, previewReload));
  watch(`${config.paths.src.base}/**/*.jpg`, series(jpg, previewReload));
  watch(`${config.paths.src.base}/**/*.svg`, series(svg, previewReload));
  watch(
    [config.config.tailwindjs, `${config.paths.src.scss}/**/*.scss`],
    series(styles, previewReload)
  );
  // watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  // watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
  console.log("\n\t" + "Watching for Changes..\n");
}

exports.default = series(html, styles, png, svg, jpg, livePreview, watchFiles);
exports.html = html;
exports.png = png;
exports.jpg = jpg;
