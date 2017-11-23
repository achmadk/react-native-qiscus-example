import {getMeta, getUser, setLogout, addUser} from '../../utils/database'

import {
  LOGIN,
  LOGOUT,
  REGISTER
} from '../actions/app'

const initialState = {
  loading: false,
  error: false,
  isLoggedIn: true,
  isStarted: false,
  access_token: ''
  // ...getMeta(),
  // ...getUser()
}

export default createReducer(initialState, {
  [`${LOGIN}_PENDING`] (state) {
    return pendingActionCallback(state)
  },
  [`${LOGIN}_FULFILLED`] (state, {payload}) {
    addUser(payload)
    return fulfilledActionCallback(state, payload)
  },
  [`${LOGIN}_REJECTED`] (state, {payload}) {
    return rejectedActionCallback(state, payload)
  },
  [`${REGISTER}_PENDING`](state) {
    return pendingActionCallback(state)
  },
  [`${REGISTER}_FULFILLED`](state, { payload }) {
    addUser(payload)
    return fulfilledActionCallback(state, payload)
  },
  [`${REGISTER}_REJECTED`](state, { payload }) {
    return rejectedActionCallback(state, payload)
  },
  [`${LOGOUT}`] (state) {
    // setLogout()
    // logoutFromFacebook()
    return { ...state, loading: false, isLoggedIn: false, error: '', access_token: '' }
  }
})

function fulfilledActionCallback(state, payload) {
  let { token_type, access_token } = payload.data
  let tokenValue = `${token_type} ${access_token}`
  return { ...state, loading: false, isLoggedIn: true, error: '', access_token: tokenValue }
}

function rejectedActionCallback(state, error) {
  // errorLogin(payload)
  return {
    ...state,
    loading: false,
    isLoggedIn: false,
    error
  }
}

function pendingActionCallback(state) {
  return { ...state, loading: true }
};

function createReducer (initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}