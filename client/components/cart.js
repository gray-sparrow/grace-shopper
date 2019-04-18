import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cartReducer';
import {deleteCart} from '../store/cartReducer'

class Cart extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
	componentDidMount() {
		this.props.fetchCart();
  }

  handleClick(itemId) {
    this.props.deleteCart(itemId)
  }
	render() {
		const { cart } = this.props;
		return (
			<div>
				<ul>
					{cart.map((item) => {
						return (
							<div key={item.id}>
                <li className="cart-item">{item.name}</li>
                <div>Quantity: {item.quantity}</div>
								<button type="submit" onClick={() => this.handleClick(item.id)} id="removeFromCart">
									REMOVE FROM CART
								</button>
							</div>
						);
					})}
				</ul>
				<div>SUBTOTAL:</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.cartReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    fetchCart: () => dispatch(fetchCart()),
    deleteCart: (itemId) => dispatch(deleteCart(itemId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
