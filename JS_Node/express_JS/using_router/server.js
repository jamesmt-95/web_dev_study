/* const express = require('express'),
    app = express();

//Different routes
app.get('/users/john', (request, response) => {
    response.send(`John’s page`);
});

app.get('/users/mark', (request, response) => {
    response.send(`John’s page`);
});

app.get('/posts/newpost', (request, response) => {
    response.send(`This is a new post`);
});

app.get('/api', (request, response) => {
    response.send(`Api endpoint`);
});

app.listen(8080, () => console.log(`Server started at port 8080`));
*/
const express = require('express'),
      app = express();

//requiring the basic_router.js
app.use('/users',require('./react-router/basic_router')); // OR Pass variable , which contains require()

//routes
app.get('/posts/newpost',(request,response)=>{
  response.send('new post');
});

app.get('/api',(request,response)=>{
  response.send('API route');
});

app.listen(8080,()=>console.log('Express server started at port 8080'));