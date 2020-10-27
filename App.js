import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/context/providers/AuthProvider'
import AppDrawerScreen from './src/routes/AppDrawer'
import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'
// Clear all keys
//AsyncStorage.clear
// Check all keys of asyncstorage
// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log('AsyncStorage')
//       console.log({ [store[i][0]]: store[i][1] })
//       return true
//     })
//   })
// })

const App = () => {
  axios.defaults.baseURL = 'https://blogapp47.herokuapp.com'
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <NavigationContainer>
            {!auth.isLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App
