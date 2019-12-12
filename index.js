var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://mauvalsa.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routerMessages = require('./Controllers/Messages/MessagesController');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Routes
app.use('/Mensajes', routerMessages);

/*var Datastore = require('nedb');
var db = new Datastore({ filename: 'db/mesagges.db', autoload: true });

db.loadDatabase(function(err) {
    // Start issuing commands after callback...
});*/

  app.io = io;
  
io.on('connection',()=>{
  console.log('user is connected');
})


var server = http.listen(3000, ()=>{
  console.log('server is running on port', server.address().port);
});

