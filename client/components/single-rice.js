import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchSingleRice} from '../store/singleRiceReducer'

class SingleRice extends Component {

  componentDidMount() {
    this.props.fetchSingleRice(this.props.match.params.riceId)
  }

  render() {
    const { singleRice } = this.props
    return (   <div className='campus' key={singleRice.id}>
    <h2>{singleRice.name}</h2>
    <img className='riceIMG' src={singleRice.img} />
        <div>
            <h3>Price: {singleRice.price}</h3>
            <h3>Type: {singleRice.type}</h3>
            <h4>Description: {singleRice.description}</h4>
        </div>
</div>)
  }
}

const mapStateToProps = state => {
  return {
    singleRice: state.singleRiceReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleRice: (riceId) => dispatch(fetchSingleRice(riceId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRice)
