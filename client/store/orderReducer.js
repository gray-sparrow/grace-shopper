import axios from 'axios'

//ACTION TYPE
const POST_ORDER = 'POST_ORDER'
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
//ACTION CREATOR
const postOrder = orderInfo => {
  //this action creator will update redux state of our order which will lead into our order confirmation page
  return {
    type: POST_ORDER,
    orderInfo
  }
}

const gotAllOrders = orders => ({
  type: GET_ALL_ORDERS,
  orders
})

//THUNK
export const newOrderPosted = subtotal => async dispatch => {
  try {
    //Making a post and returns the completed orderInfo
    const {data} = await axios.post(`/api/orders`, {price: subtotal})
    dispatch(postOrder(data))
  } catch (err) {
    console.error('Error in thunk')
  }
}

export const getAllOrders = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/orders')
    dispatch(gotAllOrders(data))
  } catch (error) {
    console.log('Get all orders thunk failed!')
  }
}

//initialState
const initialState = {
  neworder: {},
  orders: []
}

//RETURNS
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER:
      return action.orderInfo
    case GET_ALL_ORDERS:
      console.log(action.orders)
      return {...state, orders: action.orders}
    default:
      return initialState
  }
}

export default orderReducer
