const port = 8080;
const hostname = '127.0.0.1';
const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('./test.html', (err, data) => {  // ../ ->go back to prev , ./ -> same folder
        if (err) throw err;
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
    });
});
server.listen(port, hostname, () => {
    console.log('Server Reading File');
});