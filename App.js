import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AppContext, AppProvider } from './src/context/store'
import AppDrawerScreen from './src/routes/AppDrawer'
import { getDataJSON } from './src/functions/AsyncStorage'
import AsyncStorage from '@react-native-community/async-storage'

const AppStart = () => {
  const { user, userDispatch } = useContext(AppContext)
  const { authenticated } = user
  const [token, setToken] = useState(false)
  const getToken = async () => {
    let tokenData = await getDataJSON('token')
    if (tokenData) setToken(tokenData.handle)
  }
  // AsyncStorage.clear()
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: store[i][1] })
        return true
      })
    })
  })
  useEffect(() => {
    getToken()
  }, [])
  return (
    <NavigationContainer>
      {authenticated || token ? <AppDrawerScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <AppProvider>
      <AppStart />
    </AppProvider>
  )
}

export default App
