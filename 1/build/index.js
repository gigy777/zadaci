'use strict';

var _functions = require('./functions');

var _config = require('./config');

console.log((0, _functions.random)(_config.min, _config.max));
console.log((0, _functions.minIntegerFromArray)(_config.array));
console.log((0, _functions.minIntegerFromString)(_config.string));
console.log((0, _functions.concatStringsByLength)(_config.arrayOfStrings, _config.type));