import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import SignUp from './src/screens/SignUp'
import SignIn from './src/screens/SignIn'

const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name='Home' component={Home} />
    </HomeStack.Navigator>
  )
}

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
      {/* <HomeStackScreen /> */}
    </NavigationContainer>
  )
}

export default App
