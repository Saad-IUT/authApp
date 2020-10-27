import React, { useReducer } from 'react'
import BlogReducer from '../reducers/BlogReducer'
import UIReducer from '../reducers/UIReducer'
import UserReducer from '../reducers/UserReducer'
const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [comment, commentDispatch] = useReducer(BlogReducer, [], () => {
    return { comments: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false }
  })
  const [auth, authDispatch] = useReducer(UserReducer, [], () => {
    return { authenticated: false }
  })
  return (
    <AuthContext.Provider
      value={{
        comment,
        commentDispatch,
        ui,
        uiDispatch,
        auth,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
