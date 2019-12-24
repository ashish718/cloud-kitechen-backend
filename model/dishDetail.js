const mongoose = require('mongoose');

let dishSchema = new mongoose.Schema({
	dishname: {
		type: String,
		require: true
	}
})


module.exports = mongoose.model('Dishes', dishSchema);
