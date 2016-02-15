var mongoose = require('mongoose');

var estudiantetSchema = mongoose.Schema({
    nombre: String,
    apellidoP:String,
    apellidoM: String,
    email: String,
    password: String,
    matricula: String,
    carrera: String
});