import axios from 'axios'
import Cookies from 'js-cookie'
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

export const getNotes = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_NOTES_REQUEST,
    })

    const token = Cookies.get('jwt')

    const { data } = await axios.get(
      `http://localhost:9090/api/notes/getNotesByUserID/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )

    dispatch({
      type: GET_ALL_NOTES_SUCCESS,
      payload: data.userNotes,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_NOTES_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createNote =
  ({ title, text, lable }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_NOTE_REQUEST,
      })

      const token = Cookies.get('jwt')

      const { data } = await axios.post(
        `http://localhost:9090/api/notes/addnote`,
        {
          title,
          text,
          lable,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      dispatch({
        type: CREATE_NOTE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CREATE_NOTE_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const deleteNotes = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_NOTE_REQUEST,
    })
    const token = Cookies.get('jwt')

    const { data } = await axios.delete(
      `http://localhost:9090/api/notes/deleteNoteByID/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )

    if (data) {
      console.log(data)
    }

    dispatch({
      type: DELETE_NOTE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    })
  }
}
