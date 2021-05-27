import {
  CREATE_NOTE_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  GET_ALL_NOTES_FAIL,
  GET_ALL_NOTES_REQUEST,
  GET_ALL_NOTES_SUCCESS,
} from '../contants/notesConstant'

export const notesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
        notes: [],
        error: '',
      }

    case GET_ALL_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: action.payload,
        error: '',
      }
    case GET_ALL_NOTES_FAIL:
      return {
        ...state,
        loading: false,
        notes: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export const createNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
        note: {},
        error: '',
      }

    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        note: action.payload,
        error: '',
      }
    case CREATE_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        note: {},
        error: action.payload,
      }
    default:
      return state
  }
}

export const deleteNotesReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        message: '',
      }

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      }

    case DELETE_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: '',
      }

    default:
      return state
  }
}
