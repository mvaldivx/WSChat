var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = mongoose.model('Message', {name : String, message :String, hora: Date});


module.exports.Mensaje = mongoose.model('mensajes',Message,'mensajes');