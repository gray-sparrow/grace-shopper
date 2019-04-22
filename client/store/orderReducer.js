import axios from 'axios'
import history from '../history'
const POST_ORDER = 'POST_ORDER'
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
// const BUY_ORDER = 'BUY_ORDER'
const GET_ORDER = 'GET_ORDER'

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

const gotOrder = order => ({
  type: GET_ORDER,
  order
})

// const boughtOrder = order => ({
//   type: boughtOrder,
//   order
// })

//THUNK
export const newOrderPosted = subtotal => async dispatch => {
  try {
    //Making a post and returns the completed orderInfo
    const {data} = await axios.post(`/api/orders`, {price: subtotal})
    dispatch(postOrder(data))
    history.push(`/orderCheckout/${data.id}`)
    // await history.push(`/orders/${data.id}`)
  } catch (err) {
    console.error('Error in thunk', err)
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

export const getOrder = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/${id}`)
    dispatch(gotOrder(data))
  } catch (error) {
    console.log('Get single order thunk failed!')
  }
}

// export const buyOrder = id => async dispatch => {
//   try {
//     const {data} = await axios.put(`/api/orders/${id}`)
//     dispatch(boughtOrder(data))
//   } catch (error) {
//     console.log('Buy order thunk failed!')
//   }
// }
//initialState
const initialState = {
  neworder: {},
  orders: [],
  order: {}
}

//RETURNS
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER:
      return action.orderInfo
    case GET_ALL_ORDERS:
      return {...state, orders: action.orders}
    case GET_ORDER:
      return {...state, order: action.order}
    // case BUY_ORDER:
    //   const updateId = Number(action.order.id)
    //   console.log(updateId)
    default:
      return initialState
  }
}

export default orderReducer
