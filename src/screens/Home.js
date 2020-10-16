import React, { useState } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { AuthContext } from '../providers/AuthProvider'
import { Button } from 'react-native-elements'
import globalStyles from '../styles/global'

const HomeScreen = props => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <View style={globalStyles.container}>
          <Text style={globalStyles.textStyle}>
            Welcome {auth.currentUser.name}!
          </Text>
          <Button
            type='outline'
            title='Log Out!'
            onPress={() => {
              auth.setIsLoggedIn(false)
              auth.setCurrentUser({})
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default HomeScreen
