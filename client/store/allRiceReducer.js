import axios from 'axios'

//Action type
const SET_RICE = 'SET_RICE'

//Action creators
const getRice = rice => ({
  type: SET_RICE,
  rice
})

//Thunk
export const fetchRice = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/allproducts')
    dispatch(getRice(data))
  } catch (err) {
    console.error('Error in thunk')
  }
}

//Initial State
const allRice = []

//Reducer
const riceReducer = (state = allRice, action) => {
  switch (action.type) {
    case SET_RICE:
    console.log('what is action.rice', action.rice)
      return action.rice
    default:
      return state
  }
}

export default riceReducer