import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../store'
import {Icon} from 'semantic-ui-react'
import {Login, Signup} from './auth-form'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 id="title"><Link to="/home">SHOP RICE</Link></h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">Cart</Link>
        </div>
      ) : (
        <div>
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
          </div>
            <Link to="/cart"><Icon name="cart"></Icon>Cart</Link>
        </div>
        )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
