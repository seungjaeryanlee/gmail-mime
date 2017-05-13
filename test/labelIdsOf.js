// isUnread.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('labelIdsOf()', function() {
  it('labelIdsOf() should return an Array', function() {
    assert.equal(gm.labelIdsOf({'labelIds': ['UNREAD']}) instanceof Array, true);
  });
  it('labelIdsOf() should return the correct labels', function() {
    assert.deepEqual(gm.labelIdsOf({'labelIds': ['UNREAD', 'IMPORTANT', 'SENT', 'INBOX']}), ['UNREAD', 'IMPORTANT', 'SENT', 'INBOX']);
  });
});