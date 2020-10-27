import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types'
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

    default:
      return state
  }
}
