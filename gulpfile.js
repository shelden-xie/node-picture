const gulp = require('gulp');
const babel = require('gulp-babel'); // 載入 gulp-babel 套件
const watch = require("gulp-watch");//监听文件改动
const rollup = require("gulp-rollup"); //引入rollup
const replace = require("@rollup/plugin-replace");
const entry = "./src/server/**/*.js";
const cleanEntry = "./src/server/config/index.js";

function buildDev(){
    return watch(entry,{ignoreInitial: false })
    .pipe(babel({
      babelrc: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    }))//转义es5
    .pipe(gulp.dest("dist"))//输出文件
}

// 
function buildProd() {
    return gulp
      .src(entry)
      .pipe(
        babel({
          babelrc: false,
          ignore: [cleanEntry],
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        })
      )
      .pipe(gulp.dest("dist"));
  }



function cleanConfig() {
    return gulp
      .src("./src/server/config/index.js")
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
  build = gulp.series(buildDev);
}

if (process.env.NODE_ENV === "production") {
  build = gulp.series(buildProd, cleanConfig);//串行执行buildProd, cleanConfig
}

gulp.task("default", build);