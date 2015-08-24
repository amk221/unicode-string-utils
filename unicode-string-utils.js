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

  var slice = function(string, start, end) {
    return symbols(string).slice(start, end).join('');
  };

  var substring = function(string, start, end) {
    var args = [start, end];
    args.forEach(function(arg, i) {
      if (arg != null) {
        arg = parseInt(arg, 10);
        if (arg < 0 || isNaN(arg)) args[i] = 0;
      }
    });
    if (args[0] > args[1]) args.reverse();
    args.unshift(string);
    return slice.apply(null, args);
  };

  return {
    symbols: symbols,
    length: length,
    slice: slice,
    substring: substring
  };
}));