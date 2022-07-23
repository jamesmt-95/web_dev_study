const http = require('http');
const port=8080;
const hostname='127.0.0.1';
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
   const q = url.parse(req.url, true);
    const filename = '.'+ q.pathname; //browser jshows like this http://127.0.0.1:8080 , but actually it -
    //is http://127.0.0.1:8080/ . As filename adding '.'+pathname(/) in this case so it mentioning same folder(./) 
    // console.log(q.pathname) 
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end("404 Not Found");
        }
        else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
        }
    });
});
server.listen(port,hostname,()=>{
//console.log('Server Running on '+port);
console.log(`Server running on port ${port}`); //this way writing is called template string
});