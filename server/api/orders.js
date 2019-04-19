const router = require('express').Router();
const { Order } = require('../db/models');

//Route for new Orders

router.post('/', async (req, res, next) => {
	try {
		//create a newOrder object to hold my info
		let newOrderInfo;
		if (!req.session.cart.length) {
			res.sendStatus(404);
		} else {
      //if this person does not have a passport, he/she is not a user
      //HARD-CODED DATA WILL UPDATE LATER
			if (!req.session.passport) {
				newOrderInfo = {
					cart: req.session.cart,
					status: 'completed',
					price: 10,
					userId: null
				};
			} else {
				newOrderInfo = {
					cart: req.session.cart,
					status: 'completed',
					price: 10,
					userId: req.session.passport.user
				};
			}
			//create a new instance of Order within my DB with status completed
			await Order.create(newOrderInfo);
			req.session.cart = [];
			res.send(req.session.cart);
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
