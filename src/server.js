// I am just a fresher developer


const { createServer } = require('node:http');

const port = 3000;
const hostname = '127.0.0.1';

const app = require('./app'); // import the app from app.js

const server = createServer(app); // create a server using the app

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});
