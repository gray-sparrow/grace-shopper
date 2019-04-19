import React, {Component} from 'react'
import {connect} from 'react-redux'
class Checkout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello World!</div>
  }
}

export default connect(mSTP, mDTP)(Checkout)