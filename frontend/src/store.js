import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userRegisterReducer } from './reducers/userReducer'

const globalStore = createStore(userRegisterReducer, applyMiddleware(thunk))

export default globalStore
