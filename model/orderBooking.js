const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({

    orderDetails : { type : Array , "default" : [] },
	created_at:{
		type:Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Orders', orderSchema);
