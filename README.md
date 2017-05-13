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
var gm = require('gmail-mime');

gm.helloworld();
```

## Functions
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