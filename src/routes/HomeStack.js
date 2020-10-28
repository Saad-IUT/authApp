import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import CommentScreen from '../screens/Comment'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='Comment'
        component={CommentScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
