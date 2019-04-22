import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, deleteCart} from '../store/cartReducer'
import {newOrderPosted} from '../store/orderReducer'
import {Link} from 'react-router-dom'
class Cart extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart()
  }

  handleClick(itemId) {
    this.props.deleteCart(itemId)
  }

  handleSubmit(subtotal) {
    //thunk is passed the subtotal calculation because we calculated it upon mapping.
    this.props.newOrderPosted(subtotal)
  }
  render() {
    const {cart} = this.props
    let subtotal = 0
    console.log(this.props.orderInfo.id, 'orer id number')
    return (
      <div>
        <ul>
          {cart.map(item => {
            subtotal += item.price * item.quantity
            return (
              <div key={item.id}>
                <li className="cart-item">{item.name}</li>
                <div>Quantity: {item.quantity}</div>
                <button
                  type="submit"
                  onClick={() => this.handleClick(item.id)}
                  id="removeFromCart"
                >
                  REMOVE FROM CART
                </button>
              </div>
            )
          })}
        </ul>
        <div>SUBTOTAL: {subtotal}</div>
        <Link to="/orderCheckout" orderId={this.props.orderInfo.id}>
          <button
            type="submit"
            onClick={() => this.handleSubmit(subtotal)}
            id="SubmitFromCart"
          >
            Submit
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
    orderInfo: state.orderReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    deleteCart: itemId => dispatch(deleteCart(itemId)),
    newOrderPosted: subtotal => dispatch(newOrderPosted(subtotal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
