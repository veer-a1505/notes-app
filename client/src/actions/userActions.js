import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../contants/userConstant'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

export const userRegister = ({ username, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const { data } = await axios.post('/api/users/signup', {
        username,
        email,
        password,
      })

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

      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      })

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })

      localStorage.setItem('user_Info', JSON.stringify(data))
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

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('user_Info')
  Cookies.remove('jwt')
  dispatch({ type: USER_LOGOUT })
}
