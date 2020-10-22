export default (state, action) => {
  switch (action.type) {
    case 'setAuth':
      return {
        ...state,
        isLoggedIn: true,
      }
      break

    default:
      return state
      break
  }
}
