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

const fsExtra = require('fs-extra');
const path = require('path');

const copyPath = (from, to) => {
  return new Promise((resolve, reject) => {
    fsExtra.copy(from, to, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

module.exports = () => {
  return copyPath(
    path.join(__dirname, 'src/'),
    path.join(__dirname, 'build/')
  );
};
