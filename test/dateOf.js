// dateOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('dateOf()', function() {
  it('dateOf() should return a Date object', function() {
    assert.equal(gm.dateOf({internalDate: 0}) instanceof Date, true);
  });
  it('dateOf() should return the date specified by internalDate', function() {
    assert.equal(gm.dateOf({internalDate: 0}).getTime(), new Date(0).getTime());
  });
});