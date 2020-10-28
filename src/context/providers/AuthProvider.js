import React, { useReducer } from 'react'
import BlogReducer from '../reducers/dataReducer'
import UIReducer from '../reducers/uiReducer'
import UserReducer from '../reducers/userReducer'
const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [blog, blogDispatch] = useReducer(BlogReducer, [], () => {
    return { blogs: [] }
  })
  const [comment, commentDispatch] = useReducer(BlogReducer, [], () => {
    return { comments: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false }
  })
  const [auth, authDispatch] = useReducer(UserReducer, [], () => {
    return { authenticated: false }
  })
  const [user, userDispatch] = useReducer(UserReducer, [], () => {
    return { credentials: [] }
  })
  return (
    <AuthContext.Provider
      value={{
        comment,
        commentDispatch,
        blog,
        blogDispatch,
        ui,
        uiDispatch,
        auth,
        authDispatch,
        user,
        userDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
