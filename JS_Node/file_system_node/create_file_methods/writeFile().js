//writeFile() - Replaces content off a file if exist, otherwise create new file with content
const fs = require('fs');
const filename = 'file1.txt';
fs.writeFile(filename, 'Hello writing File', (err) => {
    if (err) throw err;
    console.log('Saved');
});