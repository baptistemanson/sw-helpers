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

/**
 * # sw-runtime-caching
 *
 * A service worker helper library that implements various runtime caching
 * strategies.
 *
 * You can learn more about each caching strategy on
 * {@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/|Jake Archibald's blog post}
 * which covers various ways of handling fetch events with a service worker.
 *
 * @module sw-runtime-caching
 */

import RequestWrapper from './lib/request-wrapper';
import CacheFirst from './lib/cache-first';
import CacheOnly from './lib/cache-only';
import Handler from './lib/handler';
import NetworkFirst from './lib/network-first';
import NetworkOnly from './lib/network-only';
import StaleWhileRevalidate from './lib/stale-while-revalidate';
import {defaultCacheName} from './lib/constants';

export {
  CacheFirst,
  CacheOnly,
  Handler,
  NetworkFirst,
  NetworkOnly,
  RequestWrapper,
  StaleWhileRevalidate,
  defaultCacheName,
};
