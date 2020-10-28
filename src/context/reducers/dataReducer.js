import { SET_COMMENT, SET_BLOGS } from '../types'
export default (state, actions) => {
  switch (actions.type) {
    case SET_COMMENT:
      return { ...state, comments: actions.payload }
    case SET_BLOGS:
      return {
        ...state,
        blogs: actions.payload,
      }
    default:
      return state
  }
}
