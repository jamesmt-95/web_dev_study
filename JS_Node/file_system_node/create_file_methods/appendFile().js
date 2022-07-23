// Three methods to create File:
// 1.appendFile() ,also use to update a file
// 2.open()
// 3.writeFile()

//appendFile() - appending the content to file, if file is'nt exist, new file 'll be created with content 
const fs = require('fs');
const filename = 'file1.txt';
fs.appendFile(filename, 'Hello, Im Appending this to to File' + '\n', (err) => {
    // if (err) throw err;
    if (err) console.log('Error!:'+err.message);
    else console.log('File: ' + filename + ' Updated!');
});

// appendFile() - using Server
//     const port = 8080;
//     const hostname = '127.0.0.1';
//     const fs = require('fs');
//     const http = require('http');
//     const filename = 'file1.txt';
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         fs.appendFile(filename, 'Hello,Im Appending this to to File' + '\n', (err) => {
//             if (err) throw err;
//             else fs.readFile(filename, (err, data) => {
//                 res.setHeader('Content-type', 'text/plain');
//                 res.write('Updated File:'+data);
//                 res.end();
//                 console.log('File: ' + filename + ' Updated!');
//             })
//         });
//     });
//     server.listen(port, hostname, () => {
//         console.log('File Running on '+port);
//     })

