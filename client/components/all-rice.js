import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchRice} from '../store/rice'
import {Link} from 'react-router-dom'

class AllRice extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.fetchRice();
    }

    render () {
        console.log('what is this', this.props)
        const { rice } = this.props
        return (
            <div id='allrice'>
                <main>
                <h1>All Rice</h1>
                    {rice.map(singleRice=> (
                        <div className='campus' key={singleRice.id}>
                            <Link to={`/allproducts/${singleRice.id}`}>
                                <div>
                                    <h2>{singleRice.name}</h2>    
                                </div>
                                <img className='riceIMG' src={singleRice.img} />
                            </Link>
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

const ConnectedRice = connect(mapStateToProps, mapDispatchToProps)(AllRice)

export default ConnectedRice