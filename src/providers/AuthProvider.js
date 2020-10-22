import React, { useState, useReducer, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import userReducer from './reducers/userReducer'
import { getData } from '../functions/AsyncStorage'

const AuthContext = React.createContext()

const AuthProvider = props => {
  // const [currentUser, setCurrentUser] = useState({})
  // const [isLoggedIn, setIsLoggedIn] = useState(isAuth)
  // const auth = AsyncStorage.getItem('auth')
  // AsyncStorage.setItem('auth', false)
  const [user, userDispatch] = useReducer(userReducer, {}, async () => {
    const response = await getData('auth')
    // console.log(response)
    return { currentUser: undefined, isLoggedIn: response }
  })
  const test = getData('auth')
  // console.log('auth' + JSON.stringify(test))
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getData('auth')
      // console.log(response)
    }
    fetchData()
  }, [])

  return (
    <AuthContext.Provider value={{ user: user, userDispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
