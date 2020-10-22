import React, { useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/providers/AuthProvider'
import AppDrawerScreen from './src/routes/AppDrawer'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

function App() {
  // const { user } = useContext(AuthContext)
  // useEffect(() => {
  //   console.log(user)
  // }, [user])
  useEffect(() => {
    axios.defaults.baseURL = 'https://blogapp47.herokuapp.com'
    // AsyncStorage.getAllKeys((err, keys) => {
    //   AsyncStorage.multiGet(keys, (error, stores) => {
    //     stores.map((result, i, store) => {
    //       console.log(
    //         'storage' + JSON.stringify({ [store[i][0]]: store[i][1] })
    //       )
    //       return true
    //     })
    //   })
    // })
  }, [])
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {async auth => {
          const response = await auth
          console.log(response)
          return (
            <NavigationContainer>
              {/* {auth.user.isLoggedIn === 'true' ? (
                <AppDrawerScreen />
              ) : (
                <AuthStackScreen />
              )} */}
            </NavigationContainer>
          )
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App
