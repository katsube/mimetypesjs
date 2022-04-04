const mimeTypes = require('../index')
mimeTypes.set({ext:'foo', type:'application/foo'})

console.log(mimeTypes.listAll())