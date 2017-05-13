// isImportant.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('isImportant()', function() {
  it('isImportant() should detect IMPORTANT label', function() {
    assert.equal(gm.isImportant({'labelIds': ['IMPORTANT']}), true);
  });
  it('isImportant() should detect lack of IMPORTANT label', function() {
    assert.equal(gm.isImportant({'labelIds': []}), false);
  });
});