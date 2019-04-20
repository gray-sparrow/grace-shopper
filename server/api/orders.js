const router = require('express').Router();
const { Order } = require('../db/models');

//Route for new Orders

router.post('/', async (req, res, next) => {
	try {
		//create a newOrder object to hold my info
    let newOrderInfo;
		if (!req.session.cart.length) {
			res.sendStatus(422);
		} else {
      //if this person does not have a passport, he/she is not a user
      //HARD-CODED DATA WILL UPDATE LATER
			if (!req.session.passport) {
				newOrderInfo = {
					cart: req.session.cart,
					status: 'completed',
          price: req.body.price,
          sessionId: req.sessionID
				};
			} else {
				newOrderInfo = {
					cart: req.session.cart,
					status: 'completed',
					price: req.body.price,
          userId: req.session.passport.user,
				};
			}
			//create a new instance of Order within my DB with status completed
      const newOrder = await Order.create(newOrderInfo);
			req.session.cart = [];
			res.send(newOrder);
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
