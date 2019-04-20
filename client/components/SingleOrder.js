import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getOrder} from '../store/orderReducer'
class SingleOrder extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello World!</div>
  }
}

const mSTP = state => ({
  order: state.order
})

const mDTP = dispatch => ({
  getOrder: id => dispatch(getOrder(id))
})

export default (mSTP, mDTP)(SingleOrder)
