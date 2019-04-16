import axios from 'axios'

//Action type

const SET_RICE = 'SET_RICE'

//Action creators

export const getRice = rice => ({
  type: SET_RICE,
  rice
})

// Thunk
export const fetchRice = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/allproducts')
    dispatch(getRice(data))
  } catch (err) {
    console.error(err)
  }
}

//Initial State

const initialState = []

//Reducer
export const riceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RICE:
      return action.rice
    default:
      return state
  }
}
