const port = 8080
const hostname = '127.0.0.1'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Source: https://flaviocopes.com/express-validate-input/
const {
    check,
    validationResult
} = require('express-validator/check') //check object from the package:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/register.html')
});

//https://github.com/chriso/validator.js#validators
app.post('/submit_Form', [
        check('get_fname').isLength({
            min: 5
        }).isAlpha().withMessage('Must be only alphabetical chars'),
        check('get_mob').isNumeric().isLength({
            min: 10
        }).withMessage('Mobile Number'),
        check('get_mail').isEmail().withMessage('Valid  E-Mail')
    ],
    (req, res) => {
        //
        const errors = validationResult(req);  //check below , how to manage errors
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
             //console.log(JSON.stringify(errors))
        } else {
            //
            console.log(JSON.stringify(req.body))

            const name = req.body.get_fname
            const email = req.body.get_mail
            const mobile = req.body.get_mob
            console.log(`Name : ${name} EMail:${email} Mobile : ${mobile}`)
            res.end('Check your Console')
        }
    })

app.listen(port, hostname, function () {
    console.log("App Started on PORT:" + port);
});

/*
routing to error
_______________________________
if(errors){  //if(!errors.isEmpty)
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/blockchain');
   }
   else{
      req.session.success = true;
      res.redirect('/');
   }

   To Display errors
   ________________________
   router.get('/', function(req, res){
   res.render('blockchain', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});

template
________________
{{# if errors }}
    {{# each errors }}
          <p class="alert alert-danger">{{ this.msg }}</p>
    {{/each}}
{{/if}}
*/