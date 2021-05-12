import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../contants/userConstant'
import axios from 'axios'

const userRegister = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const data = await axios.post('api/users/signup', {
        name,
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
        payload: error.message,
      })
    }
  }
}
