import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../providers/AuthProvider'
import { getDataJSON } from '../functions/AsyncStorage'
import globalStyles from '../styles/global'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <AuthContext.Consumer>
      {auth => (
        <View style={globalStyles.viewStyle}>
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
              type='solid'
              onPress={async () => {
                let userData = await getDataJSON(email)
                if (password == '' || email == '') {
                  alert('Field empty')
                  console.log(userData)
                } else if (userData.password == password) {
                  auth.setIsLoggedIn(true)
                  auth.setCurrentUser(userData)
                }
              }}
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
