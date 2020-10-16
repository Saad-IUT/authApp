import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackScreen from './src/routes/HomeStack'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <NavigationContainer>
            {auth.isLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App
