import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name='Home' component={Home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
