import { SET_COMMENT, SET_BLOGS } from '../types'
export default (state, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return { ...state, comments: action.payload }
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      }
    default:
      return state
  }
}
