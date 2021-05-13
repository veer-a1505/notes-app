import { combineReducers } from 'redux'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

export const rootReducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
})
