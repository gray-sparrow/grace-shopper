const router = require('express').Router();

//Router for api/cart
//Used for making back-end changes to req.session.cart

router.get('/', (req, res, next) => {
	res.send(req.session.cart);
});

router.put('/', (req, res, next) => {
	//updates the cart with a req.body containing an individual product's ID and quantity
	let product = req.body;
	if (req.session.cart.length === 0) {
		req.session.cart.push(product);
		product.quantity = 1;
	} else {
		for (let i = 0; i < req.session.cart.length; i++) {
			if (req.session.cart[i].id === product.id) {
				req.session.cart[i].quantity++;
				break;
			}
			if (i === req.session.cart.length - 1) {
				if (req.session.cart[i].id !== product.id) {
					req.session.cart.push(product);
					product.quantity = 1;
					break;
				}
			}
		}
	}
	res.status(200).send(req.session.cart);
});

router.put('/removeFromCart/', (req, res, next) => {
	//deleting an item from cart should return the array without the filtered item
	for (let i = 0; i < req.session.cart.length; i++) {
		if (req.session.cart[i].id === req.body.productId) {
			req.session.cart[i].quantity--;
		}
		if (req.session.cart[i].quantity < 1) {
			req.session.cart = req.session.cart.filter((item) => {
				return item.id !== req.session.cart[i].id;
			});
		}
	}
	res.status(202).send(req.session.cart);
});

module.exports = router;
