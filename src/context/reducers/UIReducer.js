import { LOADING_UI, STOP_LOADING_UI } from '../types'
export default function (state, actions) {
  switch (actions.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
