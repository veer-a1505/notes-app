import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../contants/userConstant'

const intialState = {
  loading: false,
  loggedIn: false,
  userInfos: {},
  error: '',
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        newUser: true,
        userInfos: action.payload,
      }
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        newUser: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userInfos: action.payload,
        error: '',
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
