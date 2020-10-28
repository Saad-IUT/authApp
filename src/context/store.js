import React, { useReducer } from 'react'
import dataReducer from './reducers/dataReducer'
import UIReducer from './reducers/uiReducer'
import UserReducer from './reducers/userReducer'
const StoreContext = React.createContext()

const Store = ({ children }) => {
  const [blog, blogDispatch] = useReducer(dataReducer, [], () => {
    return { blogs: [] }
  })
  const [comment, commentDispatch] = useReducer(dataReducer, [], () => {
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
        user,
        userDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, Store }
