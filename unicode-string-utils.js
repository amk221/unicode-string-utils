(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('unicode-string-utils', factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.unicodeStringUtils = factory();
  }
}(this, function() {
  'use strict';

  var fromCharCode = String.fromCharCode;

  var symbols = function(string) {
    var symbols = [];
    var index   = 0;
    var length  = string.length;

    while (index < length) {
      var curr = string.charCodeAt(index);
      var next = string.charCodeAt(index + 1);

      var isPair = (
        curr >= 0xD800 && curr <= 0xDBFF &&
        next >= 0xDC00 && next <= 0xDFFF
      );

      if (isPair) {
        symbols.push(String.fromCharCode(curr, next));
        index += 2;
      } else {
        symbols.push(string[index]);
        index += 1;
      }
    }

    return symbols;
  };

  var length = function(string) {
    return symbols(string).length;
  };

  var substring = function(string, start, end) {
    if (start == null) start = 0;
    if (end == null) end = string.length;

    return symbols(string).slice(start, end).join('');
  };

  var exports = {
    symbols: symbols,
    length: length,
    substring: substring
  };

  return exports;
}));