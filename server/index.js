const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const port = 5000;
const portNumber = process.env.PORT || port;

server.listen(portNumber, () => {
    console.log(`'Server running on port ${portNumber}`);
});