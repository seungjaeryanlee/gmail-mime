// index.js
// Seung Jae (Ryan) Lee

/**
 * Returns the message ID of the MIME message.
 * @param {object} mime - the MIME message 
 * @return {string} id - the ID of the message
 */
exports.idOf = function(mime) {
  return mime.id;
}

/**
 * Returns the thread ID of the MIME message.
 * @param {object} mime - the MIME message 
 * @return {string} threadId - the thread ID of the message
 */
exports.threadIdOf = function(mime) {
  return mime.threadId;
}

/**
 * Returns the label IDs of the MIME message.
 * @param {object} mime - the MIME message 
 * @return {Array} labelIds - the array of labels the message has
 */
exports.labelIdsOf = function(mime) {
  return mime.labelIds;
}

/**
 * Returns true if the message is unread, false otherwise.
 * @param {object} mime - the MIME message 
 * @return {bool} isUnread - boolean denoting if the message is unread 
 */
exports.isUnread = function(mime) {
  return mime.labelIds.indexOf('UNREAD') > -1;
}

/**
 * Returns true if the message is important, false otherwise.
 * @param {object} mime - the MIME message 
 * @return {bool} isImportant - boolean denoting if the message is important 
 */
exports.isImportant = function(mime) {
  return mime.labelIds.indexOf('IMPORTANT') > -1;
}

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

  if(mime.payload.mimeType === 'text/plain') {
    raw = mime.payload.body.data;
    return Buffer.from(raw, 'base64').toString('utf-8').trim();
  }

  parts = mime.payload.parts;
  while(true) {
    if(parts.find(x => x.mimeType.slice(0, 10) === 'multipart/') != undefined) {
      parts = parts.find(x => x.mimeType.slice(0, 10) === 'multipart/').parts;
    }
    else if(parts.find(x => x.mimeType === 'text/plain') != undefined) {
      raw = parts.find(x => x.mimeType === 'text/plain').body.data;
      return Buffer.from(raw, 'base64').toString('utf-8').trim();
    }
    else {
      return new Error('Unsupported MIME type');
    }
  }

  return new Error('Unsupported MIME type');
}

/**
 * Returns the decoded HTML body of the MIME message.
 * @param {object} mime - the MIME message
 * @return {text} htmlBody - the body of the message in html format
 */
exports.htmlBodyOf = function(mime) {
    if(mime.payload.mimeType === 'text/html') {
    raw = mime.payload.body.data;
    return Buffer.from(raw, 'base64').toString('utf-8').trim();
  }

  parts = mime.payload.parts;
  while(true) {
    if(parts.find(x => x.mimeType.slice(0, 10) === 'multipart/') != undefined) {
      parts = parts.find(x => x.mimeType.slice(0, 10) === 'multipart/').parts;
    }
    else if(parts.find(x => x.mimeType === 'text/html') != undefined) {
      raw = parts.find(x => x.mimeType === 'text/html').body.data;
      return Buffer.from(raw, 'base64').toString('utf-8').trim();
    }
    else {
      return new Error('Unsupported MIME type');
    }
  }

  return new Error('Unsupported MIME type');
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