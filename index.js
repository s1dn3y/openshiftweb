const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/ping', function (req, res) {
  res.send('pong!');
})

app.listen(port, function () {
  console.log(`Escutando na porta ${port}!`);
})