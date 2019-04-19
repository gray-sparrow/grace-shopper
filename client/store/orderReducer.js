import axios from 'axios'

const POST_ORDER = 'POST_ORDER'

const postOrder = (orderInfo) => {
  return {
    type: POST_ORDER,
    orderInfo
  }
}

export const newOrderPosted = (order) => async dispatch => {
  try {
    const { data } = await axios.post(`/api/orders`, order)
    dispatch(postOrder(data))
  } catch (err) {
    console.error('Error in thunk')
  }
}

//initialState
const newOrder = {}

const orderReducer = (state = newOrder, action) => {
  switch (action.type) {
    case POST_ORDER:
      return action.orderInfo
    default:
      return state
  }
}

export default orderReducer
