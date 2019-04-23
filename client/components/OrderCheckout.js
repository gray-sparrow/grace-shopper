import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleOrder from '../components/SingleOrder'
import {buyOrder} from '../store/orderReducer'
class OrderCheckout extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.buyOrder(this.props.match.params.id)
  }

  render() {
    return !this.props.cart ? (
      <div>Loading!</div>
    ) : (
      <div>
        <h2>Price: {this.props.price}</h2>
        <h2>Order Status: {this.props.status}</h2>
        <h2>Order Number: {this.props.id}</h2>
        <h2>Cart: </h2>
        {this.props.cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.quantity}</h3>
          </div>
        ))}
        <button
          type="submit"
          onClick={() => this.handleSubmit()}
          id="OrderProcess"
        >
          Process Order
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state.orderReducer

const mapDispatchToProps = dispatch => ({
  buyOrder: id => dispatch(buyOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderCheckout)
