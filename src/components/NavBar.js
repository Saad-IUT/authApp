import React from 'react'
import { Header } from 'react-native-elements'
import { AuthContext } from '../context/providers/AuthProvider'

const NavBar = ({ navigation }) => {
  return (
    <AuthContext.Consumer>
      {auth => (
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
              auth.setIsLoggedIn(false)
              auth.setCurrentUser({})
            },
          }}
        />
      )}
    </AuthContext.Consumer>
  )
}

export default NavBar
