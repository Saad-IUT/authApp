import React, { useReducer } from 'react'
import DataReducer from './reducers/dataReducer'
import UIReducer from './reducers/uiReducer'
import UserReducer from './reducers/userReducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(DataReducer, [], () => {
    return { blogs: [], comments: [], liked: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false, disable: false, errors: null }
  })
  const [user, userDispatch] = useReducer(UserReducer, [], () => {
    return { authenticated: false, credentials: [], userData: [] }
  })
  return (
    <AppContext.Provider
      value={{
        data,
        dataDispatch,
        ui,
        uiDispatch,
        user,
        userDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
