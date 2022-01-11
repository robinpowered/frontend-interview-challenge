#!/usr/bin/env node

const http = require('http');
const spawn = require('child_process').spawn;
const data = require('./data.json');

const requestListener = (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);
server.listen(8080, () => {
  console.log('Server started; starting create-react-app...');
  spawn('react-scripts', ['start'], {stdio: 'inherit'})
});
