import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import riceReducer from './allRiceReducer'
import singleRiceReducer from './singleRiceReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

const reducer = combineReducers({user, riceReducer, singleRiceReducer, cartReducer, orderReducer})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './allRiceReducer'
export * from './singleRiceReducer'
