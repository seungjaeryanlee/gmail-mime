// FIXME: Add File Header Comment

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