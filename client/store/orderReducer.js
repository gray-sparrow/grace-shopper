import axios from 'axios'

//ACTION TYPE
const POST_ORDER = 'POST_ORDER'

//ACTION CREATOR
const postOrder = (orderInfo) => {
  return {
    type: POST_ORDER,
    orderInfo
  }
}

//THUNK
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

//RETURNS
const orderReducer = (state = newOrder, action) => {
  switch (action.type) {
    case POST_ORDER:
      return action.orderInfo
    default:
      return state
  }
}

export default orderReducer
