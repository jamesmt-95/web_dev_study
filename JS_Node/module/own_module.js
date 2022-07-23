const hostname='127.0.0.1';
const port = 8080;
const http = require('http');
var a=10, b=5;
var get_data = require('./export_module');

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.write('Welcome'+'<br>'); // for new line, because Content type is text/html(\n if type is plain) 
    res.write('Current Data & Time :'+get_data.datetime());
    res.write('<h1>Calculator</h1>'+'<br>');
    res.write('Addition '+a+'+'+b+'='+get_data.add_val(a,b)+'<br>');
    res.write('Subtraction '+a+'-'+b+'='+get_data.sub_val(a,b)+'<br>');
    res.write('Multiplication '+a+'-'+b+'='+get_data.mul_val(a,b)+'<br>');
    //res.write('Add Sum='+get_data.add_val(a,b));
    // res.end();
    res.end();
});
server.listen(port, hostname, ()=>{
    console.log('Server Running on Port:'+port);
});