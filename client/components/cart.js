import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCart} from '../store/cartReducer'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart()
  }
  render() {
    const {cart} = this.props
    return (
      <div><ul>{cart.map(item => {
        return <div><li class="cart-item">{item.name}</li></div>
      })}</ul>
      <div>SUBTOTAL:</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
