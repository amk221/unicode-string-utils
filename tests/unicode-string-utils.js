var assert = require('assert');
var unicodeStringUtils = require('../unicode-string-utils');

var symbols   = unicodeStringUtils.symbols;
var length    = unicodeStringUtils.length;
var slice     = unicodeStringUtils.slice;
var substring = unicodeStringUtils.substring;

var string = 'Hello World 👋🌍';


describe('symbols', function() {
  it('returns an array of symbols', function() {
    assert.deepEqual(
      symbols(string),
      ['H','e','l','l','o',' ','W','o','r','l','d',' ','👋','🌍']
    )
  });
});

describe('length', function() {
  it('treats surrogate pairs as one symbol', function() {
    assert.strictEqual(length(string), 14);
  });
});

describe('slice', function() {
  it('behaves as expected', function() {
    assert.equal(slice(string), 'Hello World 👋🌍');
    assert.equal(slice(string, 5), ' World 👋🌍');
    assert.equal(slice(string, -5), 'ld 👋🌍');
    assert.equal(slice(string, 5, 5), '');
    assert.equal(slice(string, -5, -5), '');
    assert.equal(slice(string, 5, -5), ' Wor');
    assert.equal(slice(string, 2, -5), 'llo Wor');
    assert.equal(slice(string, -5, 2), '');
    assert.equal(slice(string, 20, 5), '');
    assert.equal(slice(string, 5, 20), ' World 👋🌍');
    assert.equal(slice(string, 'x', 5), 'Hello');
    assert.equal(slice(string, 5, 'x'), '');
    assert.equal(slice(string, 13, 14), '🌍');
  });
});

describe('substring', function() {
  it('behaves as expected', function() {
    assert.equal(substring(string), 'Hello World 👋🌍');
    assert.equal(substring(string, 5), ' World 👋🌍');
    assert.equal(substring(string, -5), 'Hello World 👋🌍');
    assert.equal(substring(string, 5, 5), '');
    assert.equal(substring(string, -5, -5), '');
    assert.equal(substring(string, 5, -5), 'Hello');
    assert.equal(substring(string, 2, -5), 'He');
    assert.equal(substring(string, -5, 2), 'He');
    assert.equal(substring(string, 20, 5), ' World 👋🌍');
    assert.equal(substring(string, 5, 20), ' World 👋🌍');
    assert.equal(substring(string, 'x', 5), 'Hello');
    assert.equal(substring(string, 5, 'x'), 'Hello');
    assert.equal(substring(string, 13, 14), '🌍');
  });
});

