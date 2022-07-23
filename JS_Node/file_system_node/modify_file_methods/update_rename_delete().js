const fs = require('fs');
const filepath = './file2.txt';
//to update a file , appendFile()

fs.appendFile(filepath,'Hello User, appendFile()-for Updating',(err)=>{
if (err) throw err;
console.log('File '+filepath+'Updated'+fd.toString());
});

//to rename a file()

fs.rename(filepath,'file3.txt',(err)=>{
console.log('File:'+filepath+' Renamed');
});

//to delete a file

fs.unlink('file4.txt', (err) => {
    // if(err) throw err; 
    if (err) console.log('Error!!! ' + err.message);
    else console.log('File Deleted');
});