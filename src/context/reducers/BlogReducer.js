import { SET_COMMENT } from '../types'
export default function (state, actions) {
  switch (actions.type) {
    case SET_COMMENT:
      return { ...state, comments: actions.payload }

    default:
      return state
  }
}
