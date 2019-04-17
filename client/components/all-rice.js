import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchRice} from '../store/allRiceReducer'
import {Link} from 'react-router-dom'

class AllRice extends Component {
    componentDidMount () {
        this.props.fetchRice();
    }

    render () {
        const { rice } = this.props
        return (
            <div id='allrice'>
                <main>
                <h1>All Rice</h1>
                    {rice.map(singleRice=> (
                        <div className='campus' key={singleRice.id}>
                            <Link to={`/allproducts/${singleRice.id}`}>
                            <h2>{singleRice.name}</h2>
                            <img className='riceIMG' src={singleRice.img} />
                            </Link>
                                <div>
                                    <h3>Price: {singleRice.price}</h3>
                                    <h3>Type: {singleRice.type}</h3>
                                    <h4>Description: {singleRice.description}</h4>
                                </div>
                        </div>
                    ))}
                    <div>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    rice: state.riceReducer
})

const mapDispatchToProps = dispatch => ({
    fetchRice: () => dispatch(fetchRice())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllRice)
