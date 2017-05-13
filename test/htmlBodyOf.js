// htmlBodyOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

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