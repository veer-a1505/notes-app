import { combineReducers } from 'redux'
import { notesReducer } from './reducers/notesReducer'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

export const rootReducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
  notes: notesReducer,
})
