const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...!')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world! </h3>');
    res.write('<h2> Alex in your area! aa </h2>');
    res.end();
})

server.listen(3001, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000');
})