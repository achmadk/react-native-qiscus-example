import API from '../../api'
import { authData } from './constants'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'

export const doLogin = formData => dispatch => {
  let data = {
    ...formData,
    ...authData
  }
  // return dispatch({
  //   type: LOGIN,
  //   payload: API.post('/auth/access_token', data)
  // })
  return Promise.resolve(dispatch({
    type: LOGIN,
    payload: API.post('/auth/access_token', data)
  }))
}

export const doRegister = formData => dispatch => {
  let data = {
    ...formData,
    ...authData,
    password_confirmation: formData.password
  }
  // return dispatch({
  //   type: REGISTER,
  //   payload: API.post('/auth/register', data)
  // })
  return Promise.resolve(dispatch({
    type: REGISTER,
    payload: API.post('/auth/register', data)
  })) 
}

export const doLogout = () => dispatch => {
  dispatch({ type: LOGOUT })
}