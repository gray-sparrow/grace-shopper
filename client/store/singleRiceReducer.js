import axios from 'axios'

//Action type
const SET_SINGLE_RICE = 'SET_SINGLE_RICE'

//Action creators
const getSingleRice = rice => {
  return {
    type: SET_SINGLE_RICE,
    rice
}}

//Thunk
export const fetchSingleRice = (riceId) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/allproducts/${riceId}`)
    dispatch(getSingleRice(data))
  } catch (err) {
    console.error('Error in thunk')
  }
}

//Initial State
const singleRice = {}

//Reducer
const singleRiceReducer = (state = singleRice, action) => {
  switch (action.type) {
    case SET_SINGLE_RICE:
      return action.rice
    default:
      return state
  }
}

export default singleRiceReducer
