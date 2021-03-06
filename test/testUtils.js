//   Copyright 2014-2015 François de Campredon
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

'use strict';

var jsdom = require('jsdom').jsdom;

var doc = global.document = jsdom();
global.window = doc.parentWindow;
global.window.document = doc;
global.navigator = {
  userAgent: 'Chrome'
};
console.debug = console.log;

var React = require('react');





var div = doc.createElement('div');


exports.render = function (component) {
  return React.render(component, div);
};



exports.unmount = function () {
  return React.unmountComponentAtNode(div);
};
