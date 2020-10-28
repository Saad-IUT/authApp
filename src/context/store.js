import React, { useReducer } from 'react'
import DataReducer from './reducers/dataReducer'
import UIReducer from './reducers/uiReducer'
import UserReducer from './reducers/userReducer'
const StoreContext = React.createContext()

const Store = ({ children }) => {
  const [blog, blogDispatch] = useReducer(DataReducer, [], () => {
    return { blogs: [] }
  })
  const [comment, commentDispatch] = useReducer(DataReducer, [], () => {
    return { comments: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false }
  })
  const [auth, authDispatch] = useReducer(UserReducer, [], () => {
    return { authenticated: false }
  })
  const [authUser, authUserDispatch] = useReducer(UserReducer, [], () => {
    return { credentials: [] }
  })
  const [user, userDispatch] = useReducer(UserReducer, [], () => {
    return { userData: [] }
  })
  return (
    <StoreContext.Provider
      value={{
        comment,
        commentDispatch,
        blog,
        blogDispatch,
        ui,
        uiDispatch,
        auth,
        authDispatch,
        authUser,
        authUserDispatch,
        user,
        userDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, Store }
