import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationScreen from '../screens/Notification'
import CommentScreen from '../screens/Comment'
import StaticProfileScreen from '../screens/StaticProfile'

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
        name='Comment'
        component={CommentScreen}
        options={{ headerShown: false }}
      />
      <NotificationStack.Screen
        name='Static Profile'
        component={StaticProfileScreen}
        options={{ headerShown: false }}
      />
    </NotificationStack.Navigator>
  )
}

export default NotificationStackScreen
