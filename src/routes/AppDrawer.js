import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import HomeTabScreen from './HomeTab'

const AppDrawer = createDrawerNavigator()

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name='Home' component={HomeTabScreen} />
      <AppDrawer.Screen name='Profile' component={Profile} />
    </AppDrawer.Navigator>
  )
}

export default AppDrawerScreen
