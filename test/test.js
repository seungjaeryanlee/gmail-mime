gm = require('../index');
var assert = require('assert');

describe('helloworld()', function() {
  it('helloworld() should return \""Hello World from gmail-mime\"', function() {
    assert.equal(gm.helloworld(), "Hello World from gmail-mime");
  })
})