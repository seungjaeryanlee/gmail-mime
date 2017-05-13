// senderOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('senderOf()', function() {
  it('senderOf() should return a string', function() {
    mime = {'payload': {'headers': [{'name': 'From', 'value': ''}]}};
    assert.equal(typeof gm.senderOf(mime), 'string');
  });
  it('subjectOf() should return the specified sender', function() {
    mime = {'payload': {'headers': [{'name': 'From', 'value': 'Seung Jae Lee'}]}};
    assert.equal(gm.senderOf(mime), 'Seung Jae Lee');
  });
});