var Datastore = require('nedb');
var express = require('express');
var db = new Datastore({ filename: './db/mesagges.db', autoload: true })
//var Mensaje = require('./Schema.js');



const router = express.Router();

var Message = {name : String, message :String};

router.get('/getmessages', (req, res) => {
    db.find({}).sort({fecha: 1}).exec((err, messages)=> {
      res.send(messages);
    })
  })

  router.post('/sendmessages', (req, res) => {
    var message =req.body;
    
    db.insert(message, (err,doc) =>{
      if(err)
        sendStatus(500);
      req.app.io.emit('message', req.body);
      res.sendStatus(200);
    })
  })
  
  module.exports = router;
