var assert = require('assert');
var unicodeStringUtils = require('../unicode-string-utils');

var symbols   = unicodeStringUtils.symbols;
var length    = unicodeStringUtils.length;
var substring = unicodeStringUtils.substring;

var string = 'Hello World 🌍🌍';


describe('symbols', function() {
  it('returns an array of symbols', function() {
    assert.deepEqual(
      symbols(string),
      ['H','e','l','l','o',' ','W','o','r','l','d',' ','🌍','🌍']
    )
  });
});

describe('length', function() {
  it('counts surrogate pairs as one symbol', function() {
    assert.strictEqual(string.length, 16);
    assert.strictEqual(length(string), 14);
  });
});

describe('substring', function() {
  it('behaves as expected', function() {
    assert.equal(substring(string), 'Hello World 🌍🌍');
    assert.equal(substring(string, 1), 'ello World 🌍🌍');
    assert.equal(substring(string, 1, 5), 'ello');
    assert.equal(substring(string, 0, 13), 'Hello World 🌍');
    assert.equal(substring(string, 13, 14), '🌍');
  });
});
