import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/context/providers/AuthProvider'
import AppDrawerScreen from './src/routes/AppDrawer'
import axios from 'axios'
import { getData } from './src/functions/AsyncStorage'
import jwtDecode from 'jwt-decode'
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './src/context/types'
import { logoutUser } from './src/context/actions/userActions'

axios.defaults.baseURL = 'https://blogapp47.herokuapp.com'

const AppStart = () => {
  const { auth, authDispatch } = useContext(AuthContext)
  const { authenticated } = auth
  const getAuth = async () => {
    const token = await getData('FBIdToken')
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < Date.now()) {
        logoutUser(authDispatch)
      } else {
        authDispatch({ type: SET_AUTHENTICATED })
      }
    }
  }
  useEffect(() => {
    getAuth()
  }, [])
  return (
    <NavigationContainer>
      {authenticated ? <AppDrawerScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <AppStart />
    </AuthProvider>
  )
}

export default App
