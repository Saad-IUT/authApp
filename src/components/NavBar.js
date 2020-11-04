import React, { useContext } from 'react'
import { Header } from 'react-native-elements'
import { logoutUser } from '../context/actions/userActions'
import { StoreContext } from '../context/store'

const NavBar = ({ navigation }) => {
  const { user, userDispatch } = useContext(StoreContext)
  return (
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
          logoutUser(userDispatch)
        },
      }}
    />
  )
}

export default NavBar
