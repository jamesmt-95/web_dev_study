let port = 8080
let hostname = '127.0.0.1'
let express = require('express')
let multer = require('multer') //module

//The disk storage engine gives you full control on storing files to disk.
let store = multer.diskStorage({
    destination: (req, file, cb) => { //destination -> The folder to which the file has been saved
        //cb=>callback function
        cb(null, './uploads') //folder name
    },
    filename: (req, file, cb) => { //filename -> The name of the file within the destination
        cb(null, Date.now() + '-' + file.originalname)
        //originalname	file name on the user's computer (Specifying the Filename when storing)
    }
    //check bottom for more options
})

let upload = multer({
    storage: store //storage: (default) -storage engine used to upload files  and store: is the variable
}).single('File_Post') //input file - name


let app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})
/*
https://www.npmjs.com/package/multer

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file (input type='file name='avatar)
  // req.body will hold the text fields, if there were any
})
*/
app.post('/submit_File', (req, res) => { //upload (declared as destination(check above))
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    upload(req, res, (err) => {
        if (err) {
            console.log(`Error While uploading File ${err}`)
        } else {
            console.log(`Uploaded ..`)
        }

    })
})


app.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
})


/*
Each file contains the following information:

Key ->	Description	Note
fieldname ->	Field name specified in the form	
originalname ->	Name of the file on the user's computer	
encoding ->	Encoding type of the file	
mimetype ->	Mime type of the file	
size -> 	Size of the file in bytes	
destination	-> The folder to which the file has been saved	DiskStorage
filename ->	The name of the file within the destination	DiskStorage
path ->	The full path to the uploaded file	DiskStorage
buffer ->	A Buffer of the entire file	MemoryStorage

*/