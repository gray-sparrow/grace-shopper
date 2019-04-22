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
      <ul>
        {this.props.orders.map(order => (
          <div key={order.id}>
            <li>
              <h1>Order:</h1>
              {order.cart.map(item => (
                <div key={item.id}>
                  <h4>
                    {item.quantity} units of {item.name}
                  </h4>
                </div>
              ))}
            </li>
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
