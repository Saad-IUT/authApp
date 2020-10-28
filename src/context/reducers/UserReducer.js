import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTH_USER,
  SET_USER,
} from '../types'
export default (state, actions) => {
  switch (actions.type) {
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
      return { ...state, credentials: actions.payload }
    case SET_USER:
      return { ...state, userData: actions.payload }
    default:
      return state
  }
}
