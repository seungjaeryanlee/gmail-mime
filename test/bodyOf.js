// bodyOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

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