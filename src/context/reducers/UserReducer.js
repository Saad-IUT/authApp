import { SET_AUTHENTICATED, SET_UNAUTHENTICATED,SET_USER } from '../types'
export default function (state, actions) {
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
    case SET_USER:
      return { ...state, credentials: actions.payload }
    default:
      return state
  }
}
