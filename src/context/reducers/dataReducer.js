import { SET_COMMENT, SET_BLOGS ,LIKE_SCREAM} from '../types'
export default (state, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return { ...state, comments: action.payload }
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      }
    case LIKE_SCREAM:
      return {
        ...state,
        liked: action.payload,
      }
    default:
      return state
  }
}
