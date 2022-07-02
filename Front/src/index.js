const express = require('express');
const app = express();
var http = require('http');
const port = 8080;

app.get('/', (req, res) => {
  console.log('Sending request to backend.');
  http.get("http://172.28.0.2:3000/", function(resp) {
    let data = [];
    console.log(resp.statusCode);
    resp.setEncoding('utf8');

    resp.on('data', chunk => {
      data.push(chunk);
    });

    resp.on('end', () => {
      console.log('Response from backend recieved.');
      var response = data.toString();
      res.send(response);
    });

  }).on('error', function(err) {
    console.log(Error);
    });
});

app.listen(port, () => {
  console.log(`Frontend listening on port: ${port}!`);
});
