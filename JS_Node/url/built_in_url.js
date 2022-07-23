const url=require('url');
//The URL module splits up a web address into readable parts.
//url.parse() -return a URL object with each part of the address as properties:
const add='http://127.0.0.1:8080/course/fullstack/batch1/:name/:age?course=f_stack&duration=3.5';
const parse=url.parse(add,true);
console.log('href:'+parse.href); //The full URL that was originally parsed. Both the protocol and host are lowercased.
console.log('protocol:'+parse.protocol); //The request protocol, lowercased.
console.log('hostname'+parse.hostname); //Just the lowercased hostname portion of the host. ex:'host.com'
console.log('host'+parse.host); //The full lowercased host portion of the URL, including port and authentication -
//information.ex:'user:pass@host.com:8080'
console.log('port'+parse.port); //The port number portion of the host. ex:'8080'
console.log('pathname'+parse.pathname); //The path section of the URL, that comes after the host and before the query,-
// including the initial slash if present. ex:'/p/a/t/h'
console.log('path'+parse.path); // Concatenation of pathname and search. ex:'/p/a/t/h?query=string'
console.log('search'+parse.search) //The 'query string' portion of the URL, including the leading question mark. (?)
const split_query=parse.query; //Either the 'params' portion of the query string, or a querystring-parsed object. ex:'query=string' 
console.log('Course :'+split_query.course);
console.log('auth'+parse.auth); //The authentication information portion of a URL. ex:'user:pass'