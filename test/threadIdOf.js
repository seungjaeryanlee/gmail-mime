// threadIdOf.js
// Seung Jae (Ryan) Lee

gm = require('../index');
var assert = require('assert');

describe('threadIdOf()', function() {
	it('threadIdOf() should return a string', function() {
		assert.equal(typeof gm.threadIdOf({'threadId': '15b05adc690148ae'}), 'string');
	});
	it('threadIdOf() should return the correct thread ID', function() {
		assert.equal(gm.threadIdOf({'threadId': '15b05adc690148ae'}), '15b05adc690148ae');
	});
});