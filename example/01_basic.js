const mimeTypes = require('../index')

const a = mimeTypes.get('a.txt')
const b = mimeTypes.get('b.html')
const c = mimeTypes.get('/var/www/html/c.html')
const d = mimeTypes.get('d.log.zip')
const e = mimeTypes.get('e.log.gz')


console.log(`a.txt: ${a}`)
console.log(`b.html: ${b}`)
console.log(`c.html: ${c}`)
console.log(`d.log.zip: ${d}`)
console.log(`e.log.gz: ${e}`)