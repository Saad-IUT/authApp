import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/providers/AuthProvider'
import AppDrawerScreen from './src/routes/AppDrawer'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.defaults.baseURL = 'https://blogapp47.herokuapp.com'
  }, [])
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <NavigationContainer>
            {auth.isLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App
