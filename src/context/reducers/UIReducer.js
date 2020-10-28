import {
  LOADING_UI,
  STOP_LOADING_UI,
  DISABLE_INPUT,
  ENABLE_INPUT,
} from '../types'
export default (state, actions) => {
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
    case DISABLE_INPUT:
      return {
        ...state,
        disable: true,
      }
    case ENABLE_INPUT:
      return {
        ...state,
        disable: false,
      }
    default:
      return state
  }
}
