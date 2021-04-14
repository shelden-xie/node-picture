const gulp = require("gulp");
// const babel = require("gulp-babel"); // 載入 gulp-babel 套件
const watch = require("gulp-watch"); //监听文件改动
const rollup = require("gulp-rollup"); //引入rollup
const replace = require("@rollup/plugin-replace");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const entry = "./src/server/**/*.ts";
const cleanEntry = "./src/server/config/index.ts";
/**
 * // .pipe(
 *   //   babel({
 *   //    babelrc: false,
 *  //     plugins: ["@babel/plugin-transform-modules-commonjs"],
 *  //   })
 *  // ) //转义es5
 */
function buildTs() {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

function buildDev() {
  return watch(entry, gulp.series(buildTs));
}

//
function buildProd() {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

function cleanConfig() {
  return gulp
    .src("./src/server/config/index.ts")
    .pipe(
      rollup({
        input: cleanEntry,
        output: {
          format: "cjs",
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": "'production'",
          }),
        ],
      })
    )
    .pipe(gulp.dest("dist"));
}

let build = null;

if (process.env.NODE_ENV === "development") {
  build = gulp.series(buildDev,cleanConfig);
}

if (process.env.NODE_ENV === "production") {
  build = gulp.series(buildProd, cleanConfig); //串行执行buildProd, cleanConfig
}

gulp.task("default", build);
