import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { StoreContext, Store } from './src/context/store'
import AppDrawerScreen from './src/routes/AppDrawer'
import axios from 'axios'
import { getData } from './src/functions/AsyncStorage'
import jwtDecode from 'jwt-decode'
import { SET_AUTHENTICATED } from './src/context/types'
import { logoutUser } from './src/context/actions/userActions'
import AsyncStorage from '@react-native-community/async-storage'

axios.defaults.baseURL = 'https://blogapp47.herokuapp.com'

const AppStart = () => {
  const { user, userDispatch } = useContext(StoreContext)
  const { authenticated } = user
  // AsyncStorage.clear()
  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] })
  //       return true
  //     })
  //   })
  // })
  const getAuth = async () => {
    const token = await getData('FBIdToken')
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < Date.now()) {
        logoutUser(userDispatch)
      } else {
        userDispatch({ type: SET_AUTHENTICATED })
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
    <Store>
      <AppStart />
    </Store>
  )
}

export default App
