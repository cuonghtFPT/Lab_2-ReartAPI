const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   console.log("Vào page");
  res.send('<h1 style="color:blue">Hello World!<h1/>')
})

app.get('/home', (req, res) => {
   console.log("Vào page home");
   res.send('<h1 style="color:red">Hello World!<h1/>')
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})