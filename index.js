const express = require('express')
const app = express()
const port = 3000
// 127.0.0.1

app.get('/home', (req, res) => {
    // app.get('/home', (req, res) => {
    var name = "Tokisaki Nino"
    name = name + "Nino"
    res.send('Hello Tokisaki Nino-sama! Yahoo!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} and listening on http://localhost:${port}`)
})