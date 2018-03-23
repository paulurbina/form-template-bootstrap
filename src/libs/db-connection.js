const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let db;

module.exports = function Connection() {
	if (!db) {
		db = mongoose.connect('mongodb://localhost/post-form');
	}

	return db;
}