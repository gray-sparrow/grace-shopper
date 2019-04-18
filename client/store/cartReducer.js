import axios from 'axios'

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

const addCart = cart => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

const removeCart = cart => {
  return {
    type: REMOVE_FROM_CART,
    cart
  }
}

export const fetchCart = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/cart')
    dispatch(getCart(data))
  } catch (error) {
    console.error('Error in thunk')
  }
}

export const putCart = (item) => async dispatch => {
  try {
    const { data } = await axios.put('/api/cart', item)
    dispatch(addCart(data))
  } catch (error) {
    console.error('Error in thunk')
  }
}

export const deleteCart = (itemId) => async dispatch => {
  try {
    const { data } = await axios.put('/api/cart/removeFromCart', {'productId': itemId})
    dispatch(removeCart(data))
  } catch (error) {
    console.error('Error in thunk')
  }
}

//Initial State
const cart = []

//Reducer
const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return action.cart
    default:
      return state
  }
}

export default cartReducer
