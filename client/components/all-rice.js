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
            <div>
                <main>
                    <section id='about'>
                    <div>
                        <div id='homepage-text'>
                            <h1>Welcome to ShopRice</h1>
                            <p>
                            Providing the highest quality of rice since 1902
                            </p>
                        </div>
                        <div id='aboutbackground'>
                            <img className='homepage' src='/pictures/hero.jpg' alt='Homepage background' />
                        </div>
                    </div>
                    </section>

                    <section id='product'>
                    <h1>All Rice Products</h1>
                        <div className='allProducts'>
                            {rice.map(singleRice=> (
                                <div className='singleProduct' key={singleRice.id}>
                                    <Link to={`/allproducts/${singleRice.id}`}>
                                    <h2>{singleRice.name}</h2>
                                    <img className='riceIMG' src={singleRice.img} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
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
