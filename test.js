const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello Virtual Machine This is Updated Aaron!')
})

app.listen(port, () => {
console.log(`Express Application listening at port 3000`)
})