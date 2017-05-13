// idOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('idOf()', function() {
  it('idOf() should return a string', function() {
    assert.equal(typeof gm.idOf({'id': '15b05adc690148ae'}), 'string');
  });
  it('idOf() should return the correct ID', function() {
    assert.equal(gm.idOf({'id': '15b05adc690148ae'}), '15b05adc690148ae');
  });
});