const mimeTypes = require('../index')

// Default
const a1 = mimeTypes.get('a.notexist')
console.log(`a.notexist: ${a1}`)  // application/octet-stream

// Append mimetype
mimeTypes.set({ext:'notexist', type:'text/plain'})

// Result
const a2 = mimeTypes.get('a.notexist')
console.log(`a.js: ${a2}`)  // text/plain
