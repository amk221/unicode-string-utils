# unicode-string-utils [DEPRECATED]

## Overview

JavaScript has a Unicode problem, see here for more information:

[https://mathiasbynens.be/notes/javascript-unicode](https://mathiasbynens.be/notes/javascript-unicode)

###### Example

    '💩'.length

...results in **2** when you would have been expecting **1**.

## Usage

    unicodeStringUtils.length('💩'); // 1

    unicodeStringUtils.symbols('Hello 🌍'); // ['H','e','l','l','o',' ','🌍']

    unicodeStringUtils.slice('Boom 💣 Pow 💥', -12, 6); // Boom 💣

    unicodeStringUtils.substring('Boom 💣 Pow 💥', 7, 12); // Pow 💥

## Tests

    npm install -g mocha
    mocha tests

## Please note

* As mentioned in the above blog post, with ES6 you probably won't need these utils.
* If you already use [lodash](http://lodash.com), you don't need this.<br>
  see: [https://twitter.com/jdalton/status/643438391498010624](https://twitter.com/jdalton/status/643438391498010624)


