const port = 8080;
const hostname = '127.0.0.1';
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('Welcome');
    res.end('Ok')
});
server.listen(port, hostname, () => {
    console.log("Server Running on" + port);
});