import React from 'react'
import { Header } from 'react-native-elements'
import { logoutUser } from '../context/actions/userActions'
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
          centerComponent={{ text: 'Blog-47', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'lock-outline',
            color: '#fff',
            onPress: () => {
              logoutUser()
            },
          }}
        />
      )}
    </AuthContext.Consumer>
  )
}

export default NavBar
