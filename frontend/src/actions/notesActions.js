import axios from 'axios'
import Cookies from 'js-cookie'
import {
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
    console.log(error.response)
    dispatch({
      type: GET_ALL_NOTES_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    })
  }
}
