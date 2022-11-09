const express = require('express');
const app = express();
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

const PORT = 5000

app.get('/api/hello', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})