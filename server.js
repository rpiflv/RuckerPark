const express = require('express');
const app = express();
require('dotenv').config()


const PORT = process.env.PORT

app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))


app.get('/api/hello', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})