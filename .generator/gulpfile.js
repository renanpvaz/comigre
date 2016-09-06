'use strict';

const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const template = require('gulp-template');
const yargs = require('yargs');
const gutil = require('gulp-util');
const del = require('del');

const root = '../imports/components';

let resolveToComponents = (glob = '') => {
  return path.join(root, glob);
};

let paths = {
  js: resolveToComponents('**/*!(.test.js).js'),
  output: root,
  blankTemplates: path.join(__dirname, 'component/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

gulp.task('component', () => {
  const cap = val => val.charAt(0).toUpperCase() + val.slice(1);
  const toDash = str => str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      dashedName: toDash(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});
