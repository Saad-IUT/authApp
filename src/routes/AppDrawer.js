import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AppStackScreen from './AppStack'
import Profile from '../screens/Profile'

const AppDrawer = createDrawerNavigator()

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name='Home' component={AppStackScreen} />
      <AppDrawer.Screen name='Profile' component={Profile} />
    </AppDrawer.Navigator>
  )
}

export default AppDrawerScreen
