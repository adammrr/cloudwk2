//first NodeJS application
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Virtual Machine!')
})

app.get('/marco', (req, res) => {
    res.send('Polo!')
})

app.post('/name', (req, res) => {
    var name = req.body.name;
    console.log("Hello: " + name );
    res.send('Hello! ' + name + "!");
})

app.listen(port, () => {
    console.log(`Express Application listening at port 3000`)
})
