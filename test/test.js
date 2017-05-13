// test.js
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

describe('bodyOf()', function() {
  it('bodyOf() should return a string', function() {
    mime = {
      'payload': {
        'mimeType': 'text/plain',
        'body': {
          'size': 17,
          'data': 'UGxhaW4gdGV4dCBib2R5DQo='
        }
      }
    };
    assert.equal(typeof gm.bodyOf(mime), 'string');
  });
  it('bodyOf() should return the correct body (type: text/plain)', function() {
    mime = {
      'payload': {
        'mimeType': 'text/plain',
        'body': {
          'size': 17,
          'data': 'UGxhaW4gdGV4dCBib2R5DQo='
        }
      }
    };
    assert.equal(gm.bodyOf(mime), 'Plain text body');
  });
  it('bodyOf() should return the correct body (type: multipart)', function() {
    mime = {
      'payload': {
        'mimeType': 'multipart/mixed',
        'headers': [
          {
            'name':  'MIME-Version',
            'value': '1.0'
          }
        ],
        'parts': [
          {
            'mimeType': 'multipart/alternative',
            'parts': [
              {
                'mimeType': 'text/plain',
                'body': {
                  'size': 18,
                  'data': 'YW5kIHRoaXMgaXMgYm9keQ0K'
                }
              }
            ]
          }
        ]
      }
    };
    assert.equal(gm.bodyOf(mime), 'and this is body');
  });
});

describe('htmlBodyOf()', function() {
  it('htmlBodyOf() should return a string', function() {
    mime = {
      'payload': {
        'mimeType': 'text/html',
        'body': {
          'size': 39,
          'data': 'PGRpdiBkaXI9Imx0ciI-YW5kIHRoaXMgaXMgYm9keTwvZGl2Pg0K'
        }
      }
    };
    assert.equal(typeof gm.htmlBodyOf(mime), 'string');
  });
  it('htmlBodyOf() should return the correct body (type: text/html)', function() {
    mime = {
      'payload': {
        'mimeType': 'text/html',
        'body': {
          'size': 39,
          'data': 'PGRpdiBkaXI9Imx0ciI-YW5kIHRoaXMgaXMgYm9keTwvZGl2Pg0K'
        }
      }
    };
    assert.equal(gm.htmlBodyOf(mime), '<div dir="ltr">and this is body</div>');
  });
  it('htmlBodyOf() should return the correct body (type: multipart)', function() {
    mime = {
      'payload': {
        'mimeType': 'multipart/mixed',
        'parts': [
          {
            'mimeType': 'multipart/alternative',
            'parts': [
              {
                'mimeType': 'text/html',
                'body': {
                  'size': 39,
                  'data': 'PGRpdiBkaXI9Imx0ciI-YW5kIHRoaXMgaXMgYm9keTwvZGl2Pg0K'
                }
              }
            ]
          }
        ]
      }
    };
    assert.equal(gm.htmlBodyOf(mime), '<div dir="ltr">and this is body</div>');
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

