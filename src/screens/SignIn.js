import React, { useState, useContext } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../providers/AuthProvider'
import { getDataJSON } from '../functions/AsyncStorage'
import globalStyles from '../styles/global'
import axios from 'axios'
import { signIn } from '../providers/actions/userAction'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, userDispatch } = useContext(AuthContext)
  // console.log(AsyncStorage.getAllKeys())
  const handleSignIn = () => {
    signIn(email, password, userDispatch)
    // AsyncStorage.setItem('auth', true)
  }

  // onPress={async () => {
  //   let userData = await getDataJSON(email)
  //   if (password == '' || email == '') {
  //     alert('Field empty')
  //   } else if (userData.password == password) {
  //     auth.setIsLoggedIn(true)
  //     auth.setCurrentUser(userData)
  //   }
  // }}
  return (
    <AuthContext.Consumer>
      {auth => (
        <View style={globalStyles.authViewStyle}>
          <Card>
            <Card.Title>Welcome to AuthApp!</Card.Title>
            <Card.Divider />
            <Input
              leftIcon={<FontAwesome name='envelope' size={24} color='black' />}
              placeholder='E-mail Address'
              onChangeText={currentInput => {
                setEmail(currentInput)
              }}
            />

            <Input
              placeholder='Password'
              leftIcon={<Feather name='key' size={24} color='black' />}
              secureTextEntry={true}
              onChangeText={currentInput => {
                setPassword(currentInput)
              }}
            />

            <Button
              icon={<AntDesign name='login' size={24} color='white' />}
              title='  Sign In!'
              onPress={handleSignIn}
            />
            <Button
              type='clear'
              icon={<AntDesign name='user' size={24} color='dodgerblue' />}
              title="  Don't have an account?"
              onPress={() => {
                navigation.navigate('SignUp')
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default SignInScreen
