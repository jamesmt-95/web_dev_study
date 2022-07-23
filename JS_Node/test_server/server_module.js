//Method-1
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
//=> arrow function - exact same functions can be expressed as an arrow function with only one line of code;
// syntax (parameters) => {statements}
// if we have no parameters then, () => {statements}
// if we have only one parameters the,  parameters => {statements}
// ex: var double = num => num * 2 equivallent to var double = function fun_name(num){ return num * 2;}
const server = http.createServer((req, res) => { //http - is a built-in module
    res.statusCode = 200;

    ///response.writeHead() will allow you to set pretty much everything about the response head 
    //including status code, content, and multiple headers.
    //res.writeHead(200,{'Content-type', 'text/plain'});

    //response.setHeader() allows you only to set a singular header at a line.
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => { //()=> is a callback function(without parameters), is always called
    // immediately after the completion of an agreed task. 
    console.log('Server started on port:' + port);
});
//server.listen(port, hostname, backlog, callback);
//port	Optional. Specifies the port we want to listen to
//hostname	Optional. Specifies the IP address we want to listen to
//backlog	Optional. Specifies the max length of the queue of pending connections. Default 511
//callback	Optional. Specifies a function to be executed when the listener has been added


//Method-2
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);