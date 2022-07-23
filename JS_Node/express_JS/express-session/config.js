const port = 5000
const hostname = '127.0.0.1'

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
/*
express-session & cookie-session
express-session - It is more abstract, it supports different session stores (like files, DB, cache and whatnot).
cookie-session - It is a simple / lightweight cookie-based (cookie is the only storage engine supported: all the session info is stored on the client, in a cookie) session implementation.
*/

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
//app.use(express.static('./views'))

app.use(session({
	secret: 'secret_key_bind*&^%$#@%$&&*', //This is the secret used to sign the session ID cookie
	saveUninitialized: true, //Forces a session that is "uninitialized" to be saved to the store.
	resave: true, //Forces the session to be saved back to the session store, even if the session was never modified during the request.
	//Settings object for the session ID cookie. The default value is { path: '/', httpOnly: true, secure: false, maxAge: null }.
	cookie: {
		httpOnly: true,
		secure: false,
		maxAge: 120000
	} //secure: recommended option. However, it requires an https-enabled website
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var get_session;


app.get('/', function (req, res) {
	get_session = req.session;
	if (get_session.email) {
		res.redirect('/admin'); //check bottom - res.redirect with data 
		//res.redirect -> Redirects to the URL derived from the specified path,
		console.log(req.sessionID)
		
	} else {
		// res.render('test1.html');
		res.sendFile(__dirname+'/views/auth_user.html')
		//res.render -> Renders a view and sends the rendered HTML string to the client
	}
});

app.post('/login', function (req, res) {
	var get_session = req.session;
	get_session.email = req.body.email;
	res.end('done');
});

app.get('/admin', function (req, res) {
	var get_session = req.session;
	if (get_session.email) {
		res.write('<h1>Hello ' + get_session.email + '</h1><br>');
		res.end('<a href=' + '/logout' + '>Logout</a>');
	} else {
		res.write('<h1>Please login first.</h1>');
		res.end('<a href=' + '/' + '>Login</a>');
	}
});

app.get('/logout', function (req, res) {

	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});

});

app.listen(port, hostname, function () {
	console.log("App Started on PORT:"+port);
});

/*
To pass and fetch data along with res.redirect

app.get('/category', function(req, res) {
	var string = encodeURIComponent('something that would break');
	res.redirect('/?valid=' + string);  //query(?) method,
  });

  You can snag that in your other route by getting the parameters sent by using req.query.
  
  app.get('/', function(req, res) {
	var passedVariable = req.query.valid;
	// Do something with variable
  });

  another method
  ------------------------
  const url = require('url');    
app.get('/category', function(req, res) {
    res.redirect(url.format({
       pathname:"/",
       query: {
          "a": 1,
          "b": 2,
          "valid":"your string here"
        }
     }));
 });

Another method
------------------
And if you are using Node >= 7.x you can also use the querystring core module

const querystring = require('querystring');    
app.get('/category', function(req, res) {
      const query = querystring.stringify({
          "a": 1,
          "b": 2,
          "valid":"your string here"
      });
      res.redirect('/?' + query);
 });

*/