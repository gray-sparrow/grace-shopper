import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleOrder from '../components/SingleOrder'
import {getOrder} from '../store/orderReducer'
class OrderCheckout extends Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   this.props.getOrder(this.props.match.params.id)
  // }
  render() {
    console.log(this.props)
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
            <h3>{item.quantity}</h3>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => state.orderReducer

// const mapDispatchToProps = dispatch => ({
//   getOrder: id => dispatch(getOrder(id))
// })

export default connect(mapStateToProps)(OrderCheckout)
