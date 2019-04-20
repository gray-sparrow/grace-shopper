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
    if (!this.props.orders) return <div>Loading!</div>
    return (
      <ul>
        {this.props.orders.map(order => (
          <div key={order.id}>
            <li>Order:{order.cart.name}</li>
            <li>Status:{order.status}</li>
            <li>Price:{order.price}</li>
          </div>
        ))}
      </ul>
    )
  }
}

const mSTP = state => state.orderReducer

const mDTP = dispatch => ({
  getAllOrders: () => dispatch(getAllOrders())
})

export default connect(mSTP, mDTP)(AllOrders)
