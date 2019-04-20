import axios from 'axios'

//ACTION TYPE
const POST_ORDER = 'POST_ORDER'

//ACTION CREATOR
const postOrder = (orderInfo) => {
  //this action creator will update redux state of our order which will lead into our order confirmation page
  return {
    type: POST_ORDER,
    orderInfo
  }
}

//THUNK
export const newOrderPosted = (subtotal) => async dispatch => {
  try {
    //Making a post and returns the completed orderInfo
    const { data } = await axios.post(`/api/orders`, { price: subtotal })
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
