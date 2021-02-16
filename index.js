const express = require('express')
const app = express()
const port = 3500

app.get('/trangchu', (req, res) => {
    var x=9;
    var c=x*2+3;
  res.send('Hellcccccccccccco Wsaffffffffffffffffffffsorld!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})