// subjectOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('subjectOf()', function() {
  it('subjectOf() should return a string', function() {
    mime = {'payload': {'headers': [{'name': 'Subject', 'value': ''}]}};
    assert.equal(typeof gm.subjectOf(mime), 'string');
  });
  it('subjectOf() should return the specified subject', function() {
    mime = {'payload': {'headers': [{'name': 'Subject', 'value': 'This is a text'}]}};
    assert.equal(gm.subjectOf(mime), 'This is a text');
  });
});
