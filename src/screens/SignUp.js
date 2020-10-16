import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { storeDataJSON } from '../functions/AsyncStorage'
import globalStyles from '../styles/global'

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={globalStyles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name='ios-person' size={24} color='black' />}
          placeholder='Name'
          onChangeText={currentInput => {
            setName(currentInput)
          }}
        />
        <Input
          leftIcon={<Ionicons name='ios-school' size={24} color='black' />}
          placeholder='Student ID'
          onChangeText={currentInput => {
            setId(currentInput)
          }}
        />
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
          icon={<AntDesign name='user' size={24} color='white' />}
          title='  Sign Up!'
          type='solid'
          onPress={() => {
            let currentUser = {
              name,
              email,
              id,
              password,
            }
            storeDataJSON(email, currentUser)
            navigation.navigate('SignIn')
          }}
        />
        <Button
          type='clear'
          icon={<AntDesign name='login' size={24} color='dodgerblue' />}
          title='  Already have an account?'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        />
      </Card>
    </View>
  )
}

export default SignUpScreen
