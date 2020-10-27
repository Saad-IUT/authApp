import React, { useState, useReducer } from 'react'
import BlogReducer from '../reducers/BlogReducer'
import UIReducer from '../reducers/UIReducer'
const AuthContext = React.createContext()

const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [blog, blogDispatch] = useReducer(BlogReducer, [], () => {
    return { comments: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false }
  })
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        ui,
        uiDispatch,       
        blog,
        blogDispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
