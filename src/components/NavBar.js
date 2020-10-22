import React, { useContext } from 'react'
import { Header } from 'react-native-elements'
import { AuthContext } from '../providers/AuthProvider'
import { AsyncStorage } from 'react-native'
import { storeData } from '../functions/AsyncStorage'

const NavBar = ({ navigation }) => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => {
          navigation.toggleDrawer()
        },
      }}
      centerComponent={{ text: 'The Office', style: { color: '#fff' } }}
      rightComponent={{
        icon: 'lock-outline',
        color: '#fff',
        onPress: () => {
          storeData('auth', 'false')
          // auth.setIsLoggedIn(false)
          // auth.setCurrentUser({})
        },
      }}
    />
  )
}

export default NavBar
