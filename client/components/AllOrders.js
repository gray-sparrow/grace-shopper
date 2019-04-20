import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllOrders} from '../store/orderReducer'
import {Link} from 'react-router-dom'

class AllOrders extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllOrders()
  }
  render() {
    return !this.props.orders ? (
      <div>Loading!</div>
    ) : (
      <div>
        {console.log(this.props, 'reaching here')}
        {this.props.orders.orders.map(order => (
          <div key={order.id}>
            <h1>Order:{order.cart.name}</h1>
            <h2>Status:{order.status}</h2>
            <h2>Price:{order.price}</h2>
          </div>
        ))}
      </div>
    )
  }
}

const mSTP = state => ({
  orders: state.orderReducer
})

const mDTP = dispatch => ({
  getAllOrders: () => dispatch(getAllOrders())
})

export default connect(mSTP, mDTP)(AllOrders)
