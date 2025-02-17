'use strict';

const tempLib = require('..');
const assert = require('assert').strict;

assert.strictEqual(tempLib(), 'Hello from tempLib');
console.info('tempLib tests passed');
