import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationScreen from '../screens/Notification'
import PostScreen from '../screens/Post'

const NotificationStack = createStackNavigator()

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator initialRouteName='Notification'>
      <NotificationStack.Screen
        name='Notification'
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <NotificationStack.Screen
        name='Post'
        component={PostScreen}
        options={{ headerShown: false }}
      />
    </NotificationStack.Navigator>
  )
}

export default NotificationStackScreen
