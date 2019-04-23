import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cartReducer'
import { Icon } from 'semantic-ui-react'

class CartCounter extends Component {
  componentDidMount() {
    this.props.fetchCart()
  }
  render() {
    const { cart } = this.props
    let currentTotal = 0;
    cart.map(item => {currentTotal += item.quantity})
    return <div><Icon name="cart"></Icon>Cart | {currentTotal}</div>
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
