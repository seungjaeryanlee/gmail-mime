// FIXME: Add File Header Comment

// FIXME: Add Function Comment
exports.dateOf = function(mime) {
  return new Date(parseInt(mime.internalDate));
}

// FIXME: Add Function Comment
exports.subjectOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'Subject').value;
}

// FIXME: Add Function Comment
// FIXME: Write Function
exports.bodyOf = function(mime) {}

// FIXME: Add Function Comment
// FIXME: Write Function
exports.htmlBodyOf = function(mime) {}

// FIXME: Add Function Comment
exports.senderOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'From').value;
}

// FIXME: Add Function Comment
exports.recipientOf = function(mime) {
  return mime.payload.headers.find(x => x.name === 'To').value;
}