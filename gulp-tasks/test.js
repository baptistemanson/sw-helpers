/*
 Copyright 2016-2017 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
const seleniumAssistant = require('selenium-assistant');
const gulp = require('gulp');
const mocha = require('gulp-spawn-mocha');
const glob = require('glob');

gulp.task('download-browsers', function() {
  if (process.platform === 'win32') {
    // We only support CLI testing on Windows at the moment.
    return Promise.resolve();
  }

  console.log('    Starting browser download.....');
  return Promise.all([
    seleniumAssistant.downloadLocalBrowser('firefox', 'stable', 48),
    seleniumAssistant.downloadLocalBrowser('firefox', 'beta', 48),
    seleniumAssistant.downloadLocalBrowser('firefox', 'unstable', 48),
    seleniumAssistant.downloadLocalBrowser('chrome', 'stable', 48),
    seleniumAssistant.downloadLocalBrowser('chrome', 'beta', 48),
    seleniumAssistant.downloadLocalBrowser('chrome', 'unstable', 48),
  ])
  .then(() => {
    console.log('    Browser download complete.');
  });
});

gulp.task('test', ['download-browsers', 'build', 'lint'], () => {
  const mochaOptions = {};
  if (global.cliOptions.grep) {
    mochaOptions.grep = global.cliOptions.grep;
  }
  const testGlob = `packages/${global.projectOrStar}/test/*.js`;
  const testFiles = glob.sync(testGlob);
  if (testFiles.length === 0) {
    // Mocha fails when no tests are found so return early.
    return;
  }
  return gulp.src(testGlob, {read: false})
    .pipe(mocha(mochaOptions))
    .once('error', (error) => {
      console.error(error);
      process.exit(1);
    });
});
