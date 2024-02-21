import express from 'express'

const app = express();
require('dotenv').config();

// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    const data = "<h1>Welcome</h1><br><input>"
    res.send(data)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})