const gulp = require("gulp");
const typescript = require("gulp-typescript");
const sass = require("gulp-sass");

// pull in the project TypeScript config
const typescriptConfig = typescript.createProject("tsconfig.json");

// Place compiled files in the dist directory
gulp.task("scripts", () => {
  const typescriptResult = typescriptConfig.src()
  .pipe(typescriptConfig());

  return typescriptResult.js.pipe(gulp.dest("dist"));
});

gulp.task("styles", () => {
  const sassResult = gulp.src("sass/**/*.scss")
  .pipe(sass().on("error", sass.logError));

  return sassResult.pipe(gulp.dest("./css/"));
});

// Watch .ts files for changes 
gulp.task("watch", ["scripts", "styles"], () => {
  gulp.watch("src/*.ts", ["scripts"]);
  gulp.watch("sass/*.scss", ["styles"]);
});

gulp.task("default", ["watch"]);