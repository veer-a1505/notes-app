import { combineReducers } from 'redux'
import {
  createNoteReducer,
  deleteNotesReducer,
  editNotesReducer,
  notesReducer,
} from './reducers/notesReducer'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

export const rootReducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
  notes: notesReducer,
  createNote: createNoteReducer,
  deleteNote: deleteNotesReducer,
  editNote: editNotesReducer,
})
