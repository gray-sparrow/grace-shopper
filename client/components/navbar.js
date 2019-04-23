<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Icon} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 id="title">
      <Link to="/home">SHOP RICE</Link>
    </h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Order History</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">
            <Icon name="cart" />Cart
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)
=======
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import CartCounter from './cart-counter';

const Navbar = ({ handleClick, isLoggedIn }) => (
	<div>
		<h1 id="title">
			<Link to="/home">SHOP RICE</Link>
		</h1>
		<nav>
			{isLoggedIn ? (
				<div>
					{/* The navbar will show these links after you log in */}
					<Link to="/home">Home</Link>
					<a href="#" onClick={handleClick}>
						Logout
					</a>
					<Link to="/cart">
						<CartCounter />
					</Link>
				</div>
			) : (
				<div>
					{/* The navbar will show these links before you log in */}
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
					<Link to="/cart">
						<CartCounter />
					</Link>
				</div>
			)}
		</nav>
		<hr />
	</div>
);
>>>>>>> master
=======
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../store'
import {Icon} from 'semantic-ui-react'
import {Login, Signup} from './auth-form'
import {UserHome} from './user-home'
import {me} from '../store/user'
import CartCounter from './cart-counter'

class Navbar extends Component {
>>>>>>> master

  componentDidMount() {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn, handleClick} = this.props
    return(
      <div className="navBar">

        <nav>
        <h1 id="title"><Link to="/home">SHOP RICE</Link></h1>
          {isLoggedIn ? (
            <div className="navBar-buttons">
              {/* The navbar will show these links after you log in */}
              <div><UserHome user={this.props.user}/></div>
              <div>
                <Link to="/home">Home</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>
                <Link to="/cart">
						      <CartCounter />
					      </Link>
            </div>
          ) : (
            <div className="navBar-buttons">
              {/* The navbar will show these links before you log in */}
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  Login
                  <div id="login-form" className="menu">
                    <div className="item">
                      <Login />
                    </div>
                  </div>
                </div>
                <div className="ui simple dropdown item">
                  Signup
                  <div id="signup-form" className="menu">
                    <div className="item">
                      <Signup />
                    </div>
                  </div>
                </div>
                <Link to="/cart">
						      <CartCounter />
					      </Link>
              </div>
            </div>
            )}
        </nav>
        <hr />
      </div>
    )
  }
}

// const Navbar = ({ handleClick, isLoggedIn }) => (
// 	<div>
// 		<h1 id="title">
// 			<Link to="/home">SHOP RICE</Link>
// 		</h1>
// 		<nav>
// 			{isLoggedIn ? (
// 				<div>
// 					{/* The navbar will show these links after you log in */}
// 					<Link to="/home">Home</Link>
// 					<a href="#" onClick={handleClick}>
// 						Logout
// 					</a>
// 					<Link to="/cart">
// 						<CartCounter />
// 					</Link>
// 				</div>
// 			) : (
// 				<div>
// 					{/* The navbar will show these links before you log in */}
// 					<Link to="/login">Login</Link>
// 					<Link to="/signup">Sign Up</Link>
// 					<Link to="/cart">
// 						<CartCounter />
// 					</Link>
// 				</div>
// 			)}
// 		</nav>
// 		<hr />
// 	</div>
// );
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
