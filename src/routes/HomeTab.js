import React from 'react'
import HomeStackScreen from './HomeStack'
import NotificationStackScreen from './NotificationStack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

const HomeTab = createMaterialBottomTabNavigator()

const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator initialRouteName='Home'>
      <HomeTab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name='home' color='white' size={26} />
            ) : (
              <AntDesign name='home' color='white' size={22} />
            ),
        }}
      />
      <HomeTab.Screen
        name='Notification'
        component={NotificationStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name='ios-notifications' size={26} color='white' />
            ) : (
              <Ionicons
                name='ios-notifications-outline'
                size={22}
                color='white'
              />
            ),
        }}
      />
    </HomeTab.Navigator>
  )
}

export default HomeTabScreen
