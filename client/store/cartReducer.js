import axios from 'axios'

const GET_CART = 'GET_CART';

const getCart = cart => {
  return {
    type: GET_CART,
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

//Initial State
const cart = []

//Reducer
const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}

export default cartReducer
