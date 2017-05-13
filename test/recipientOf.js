// recipientOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('recipientOf()', function() {
  it('recipientOf() should return a string', function() {
    mime = {'payload': {'headers': [{'name': 'To', 'value': ''}]}};
    assert.equal(typeof gm.recipientOf(mime), 'string');
  });
  it('recipientOf() should return the specified sender', function() {
    mime = {'payload': {'headers': [{'name': 'To', 'value': 'Seung Jae Lee'}]}};
    assert.equal(gm.recipientOf(mime), 'Seung Jae Lee');
  });
});

