import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabScreen from './HomeTab'
import StaticProfileScreen from '../screens/StaticProfile'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName='Home Tab'>
      <AppStack.Screen
        name='Home Tab'
        component={HomeTabScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name='Static Profile'
        component={StaticProfileScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  )
}

export default AppStackScreen
