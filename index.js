const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ping', function (req, res) {
  res.send('pong!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});