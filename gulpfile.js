const gulp = require('gulp');
const typescript = require('gulp-typescript');

// pull in the project TypeScript config
const typescriptConfig = typescript.createProject('tsconfig.json');

// Place compiled files in the dist directory
gulp.task('scripts', () => {
  const typescriptResult = typescriptConfig.src()
  .pipe(typescriptConfig());
  return typescriptResult.js.pipe(gulp.dest('dist'));
});

// Watch .ts files for changes 
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);