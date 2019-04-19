import axios from 'axios'

const order = {}

const MAKE_ORDER = 'MAKE_ORDER'

const makeOrder = order => ({
  type: MAKE_ORDER,
  order
})

export const createOrder = () => async dispatch => {
  try {
    const {data} = await axios.post('/api/orders/createOrder')
    dispatch(makeOrder(data))
  } catch (error) {
    console.log('Create order thunk failed!')
  }
}

const orderReducer = (state = order, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      return action.order
    default:
      return state
  }
}

export default orderReducer
