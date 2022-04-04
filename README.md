# MimeTypes.js
Get mime type from file name / file path. The list of MIME Types comes with Apache.

## INDEX
1. [Installation](#installation)
1. [Usage](#usage)
1. [API](#api)
    1. [get](#get)
    1. [set](#set)
    1. [remove](remove)
    1. [listAll](#listall)
1. [License](#license)

## Installation
```shellsession
$ npm install @katsube/mimetypesjs
```

## Usage
```javascript
const mimeTypes = require('mimetypesjs')

const a = mimeTypes.get('a.txt')
console.log(`a.txt: ${a}`)  // text/plain
```

## API
### get
Returns the MIME type according to the file extension.
```javascript
const mimeTypes = require('mimetypesjs')

const a = mimeTypes.get('a.txt')  // text/plain
const b = mimeTypes.get('/var/www/html/b.html') // text/html
```

For undefined extensions, `application/octet-stream` is returned. The default value can be changed with the second argument.

```javascript
const a = mimeTypes.get('a.notdefined', 'text/plain')  // text/plain
```

### set
You can add or override the MIME Type yourself.

```javascript
// Single
mimeTypes.set({ext:'foo', type:'application/foo'})

// Multiple
mimeTypes.set([
    {ext:'foo', type:'application/foo'},
    {ext:'bar', type:'application/bar'},
])
```

### remove
Delete a predefined MIME Type.

```javascript
// Single
mimeTypes.remove('txt')

// Multiple
mimeTypes.remove(['txt', 'html'])
```


### listAll
Get the predefined MIME Type.

```javascript
console.log(mimeTypes.listAll())
```

## License
The MIT License.

The list of MIME Types is [Apache licensed](https://github.com/apache/httpd/blob/trunk/LICENSE)