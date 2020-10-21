import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackScreen from './src/routes/AuthStack'
import { AuthContext, AuthProvider } from './src/providers/AuthProvider'
import AppDrawerScreen from './src/routes/AppDrawer'

function App() {
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
