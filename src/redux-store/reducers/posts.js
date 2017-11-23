import { GET_POSTS } from '../actions/posts'

const initialState = {
  data: [],
  loading: true,
  error: false
}

export default function posts (state = initialState, action) {
  let { type, payload } = action
  switch (type) {
    case `${GET_POSTS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_POSTS}_FULFILLED`:
      let { data } = payload.data
      return {
        ...state,
        data,
        error: false
      }
    case `${GET_POSTS}_REJECTED`:
      let error = payload
      return {
        ...state,
        data: [],
        isLoading: false,
        error
      }
    default:
      return state
  }
}