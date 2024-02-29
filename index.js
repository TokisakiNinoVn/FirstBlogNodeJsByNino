const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
// localhost: 127.0.0.1

app.get('/', (req, res) => {

    res.send('Hello Tokisaki Nino-sama! Yahoo!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} and listening on http://localhost:${port}`)
})