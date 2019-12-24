const mongoose = require('mongoose');

let orderSummary = new mongoose.Schema({
  itemId:{
    type: String,
    require: true
  },
  dishname: {
		type: String,
		require: true
	},
  quantity:{
    type: Number,
    require: true
  }

})


module.exports = mongoose.model('Summary', orderSummary);
