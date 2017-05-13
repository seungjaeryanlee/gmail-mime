// index.js
// Seung Jae (Ryan) Lee

/**
 * Returns a Date object from the MIME message.
 * @param {object} mime - the MIME message 
 * @return {Date} date - the date message was sent
 */
exports.dateOf = function(mime) {
  return new Date(parseInt(mime.internalDate));
}

/**
 * Returns the decoded title of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} subject - the subject of the message
 */
exports.subjectOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'Subject').value;
}

/**
 * Returns the decoded body of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} body - the body of the message in plaintext format
 */
exports.bodyOf = function(mime) {
  // FIXME: Write Function
}

/**
 * Returns the decoded HTML body of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} htmlBody - the body of the message in html format
 */
exports.htmlBodyOf = function(mime) {
  // FIXME: Write Function
}

/**
 * Returns the sender of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} sender - the sender of the message
 */
exports.senderOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'From').value;
}

/**
 * Returns the recipient of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} recipient - the recipient of the message
 */
exports.recipientOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'To').value;
}