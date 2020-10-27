import React, { useContext } from 'react'
import { Header } from 'react-native-elements'
import { logoutUser } from '../context/actions/userActions'
import { AuthContext } from '../context/providers/AuthProvider'
import {SET_UNAUTHENTICATED} from '../context/types'
const NavBar = ({ navigation }) => {
  const { auth, authDispatch } = useContext(AuthContext)
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
              logoutUser(authDispatch)
              // authDispatch({ type: SET_UNAUTHENTICATED })
            },
          }}
        />
      )}
    </AuthContext.Consumer>
  )
}

export default NavBar
