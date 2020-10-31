import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_USER,
  SET_USER,
} from '../types'
export default (state, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      }
    case SET_AUTH_USER:
      return { ...state, credentials: action.payload }
    case SET_USER:
      return { ...state, userData: action.payload }
    default:
      return state
  }
}
