import {
  LOADING_UI,
  STOP_LOADING_UI,
  DISABLE_INPUT,
  ENABLE_INPUT,
  SET_ERRORS,
  CLEAR_ERRORS,
} from '../types'
export default (state, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      }
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
        loading: true,
      }
    case ENABLE_INPUT:
      return {
        ...state,
        disable: false,
        loading: false,
      }
    default:
      return state
  }
}
