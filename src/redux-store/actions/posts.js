import API from '../../api'

export const GET_POSTS = 'GET_POSTS'

const getPostsData = {
  type: GET_POSTS,
  payload: API.get('/posts'),
  meta: {
    offline: {
      effect: API.get('/posts'),
      commit: { type: `${GET_POSTS}_FULFILLED` },
      rollback: { type: `${GET_POSTS}_REJECTED` }
    }
  }
}

export function getPostsAction () {
  return getPostsData
}

export const getPosts = () => dispatch => dispatch(getPostsData)