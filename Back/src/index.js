const express = require('express');
const path = require('path');
const ip = require('ip');
const ipAddress = ip.address();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Request recieved from Frontend.');
  res.sendFile(path.join(__dirname, '/index.html'));
  console.log('Response sent.');
});

app.listen(port, () => {
  console.log(`Backend listening on port: ${port}!`);
  console.log(`Network access via: ${ipAddress}:${port}!`);
});
