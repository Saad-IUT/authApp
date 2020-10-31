import React, { useReducer } from 'react'
import DataReducer from './reducers/dataReducer'
import UIReducer from './reducers/uiReducer'
import UserReducer from './reducers/userReducer'
const StoreContext = React.createContext()

const Store = ({ children }) => {
  const [data, dataDispatch] = useReducer(DataReducer, [], () => {
    return { blogs: [], comments: [] }
  })
  const [ui, uiDispatch] = useReducer(UIReducer, [], () => {
    return { loading: false, disable: false, errors: null }
  })
  const [user, userDispatch] = useReducer(UserReducer, [], () => {
    return { authenticated: false, credentials: [], userData: [] }
  })
  return (
    <StoreContext.Provider
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
    </StoreContext.Provider>
  )
}

export { StoreContext, Store }
