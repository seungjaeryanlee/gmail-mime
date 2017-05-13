// isUnread.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('isUnread()', function() {
  it('isUnread() should detect UNREAD label', function() {
    assert.equal(gm.isUnread({'labelIds': ['UNREAD']}), true);
  });
  it('isUnread() should detect lack of UNREAD label', function() {
    assert.equal(gm.isUnread({'labelIds': []}), false);
  });
});