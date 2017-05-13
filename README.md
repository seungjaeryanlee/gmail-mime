# gmail-mime
[![Build Status](https://travis-ci.org/sjlee235/gmail-mime.svg?branch=master)](https://travis-ci.org/sjlee235/gmail-mime)

## Description
gmail-mime is an NPM package to make interpreting MIME messages from gmail API as simple as possible.

## Install
```
npm install gmail-mime
```

## Usage
```javascript
var google = require('googleapis');
var gm = require('gmail-mime');

google.gmail('v1').users.messages.list({
  userId: 'me',
  q: 'is:unread',
}, function (err, res) {

  if (err) { console.log(err); }
  else if (res && res.messages & res.messages.length >= 0) {
    for(var i = 0; i < res.messages.length; i++) {
    	console.log(gm.subjectOf(res.messages[i]));
    }
  } else {
    console.log('No unread message exists');
  }
});
```

## Functions
### idOf(mime)
Returns the message ID of the MIME message.

### threadIdOf(mime)
Returns the thread ID of the MIME message.

### labelIdsOf(mime)
Returns the label IDs of the MIME message.

### isUnread(mime)
Returns true if the message is unread, false otherwise.

### isImportant(mime)
Returns true if the message is important, false otherwise.

### dateOf(mime)
Returns a Date object from the MIME message.

### subjectOf(mime)
Returns the decoded title of the MIME message.

### bodyOf(mime)
Returns the decoded body of the MIME message.

### htmlBodyOf(mime)
Returns the decoded HTML body of the MIME message.

### senderOf(mime)
Returns the sender of the MIME message.

### recipientOf(mime)
Returns the recipient of the MIME message.