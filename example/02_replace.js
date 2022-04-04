const mimeTypes = require('../index')

// Default
const a1 = mimeTypes.get('a.js')
console.log(`a.js: ${a1}`)  // application/javascript

// Replace default mimetype
mimeTypes.set({ext:'js', type:'text/javascript'})

// Result
const a2 = mimeTypes.get('a.js')
console.log(`a.js: ${a2}`)  // text/javascript
