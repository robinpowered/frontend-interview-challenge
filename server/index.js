const http = require('http');
const spawn = require('child_process').spawn;
const data = require('./data.json');

const requestListener = (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(data));
};

const port = 8080;
const server = http.createServer(requestListener);
server.listen(port);
console.log(`Server listening on port ${port}; starting create-react-app...`);

spawn('react-scripts', ['start'], {stdio: 'inherit'})