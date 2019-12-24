let router = require('express').Router();

let Dishes = require('../model/dishDetail');
let Orders = require('../model/orderBooking')
let Summary = require('../model/summary.js')



router.get('/dish', (req, res)=>{
	Dishes.find({}, (err, result)=>{
		if (err) {
			res.status(400).send("dish details not fetching")
		}
		res.json(result);
	})
});

router.post('/addDish', (req, res)=>{
	const dish = new Dishes(req.body);

		return dish.save((err, data)=>{
			if (err) {
				res.status(400).send("something went wrong in adding the dish")
		}

		res.json(data);

	})
})

router.post('/orderBooking', (req, res)=>{

	let ordered = new Orders({
		orderDetails:req.body
	});

	return ordered.save((err, data)=>{
		if (err) {
			console.log(err);
		}

		console.log(data);

	})
})


router.get('/orderBookingSummary', (req, res)=>{
	Orders.find({}, (err, result)=>{
		if (err) {console.log(err)}
	res.send(JSON.stringify(result))
	})
})


router.post('/Summary', (req, res)=>{
	let orderSummary = new Summary(req.body);
	return orderSummary.save((err, result)=>{
		if (err) {
			console.log(err)
		}
		console.log(result)
	})
})

router.get('/doneSummary', (req, res)=>{
return Summary.aggregate(
	 	[
			{$match: {}},
			{$group: {_id: "$dishname", quantity: {$sum: "$quantity"}} }
		]
	 , (err, result)=>{
			if (err) {
				console.log(err)
			}
			res.json(result);
		}
	)
})


module.exports = router;
