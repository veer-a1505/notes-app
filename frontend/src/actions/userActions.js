import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../contants/userConstant'
import axios from 'axios'

export const userRegister = ({ username, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const { data } = await axios.post(
        'http://localhost:9090/api/users/signup',
        {
          username,
          email,
          password,
        }
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      })
    }
  }
}

export const userLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })

      const { data } = await axios.post(
        'http://localhost:9090/api/users/signin',
        {
          email,
          password,
        }
      )

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      })
    }
  }
}
