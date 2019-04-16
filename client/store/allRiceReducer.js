import axios from 'axios'

//Action type
const SET_RICE = 'SET_RICE'

//Action creators
const getRice = rice => ({
  type: SET_RICE,
  rice
})

// Thunk
export const fetchRice = () => async dispatch => {
  try {
    //console.log('is thunk reached?')
    const {data} = await axios.get('/api/allproducts')
    //console.log('what is data', data)
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