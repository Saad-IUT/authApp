import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabScreen from './HomeTab'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName='Home Tab'>
      <AppStack.Screen
        name='Home Tab'
        component={HomeTabScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  )
}

export default AppStackScreen
