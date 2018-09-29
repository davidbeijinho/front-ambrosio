const express = require('express')
const app = express()
const port = 9000

console.log('Server stared in %s mode', process.env.NODE_ENV);

app.use(express.static('build'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))