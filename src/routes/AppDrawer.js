import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeTabScreen from './HomeTab'
import Profile from '../screens/Profile'

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
