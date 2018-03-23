module.exports = function () {
	const mongoose = require('mongoose');
	var db = require('../libs/db-connection')();
	var Schema = mongoose.Schema;

	var User = mongoose.Schema({
		nombre: String,
		apellido: String,
		numero: Number,
		correo:String
	});

	
	return mongoose.model('users', User); 
}