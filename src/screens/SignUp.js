import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { storeDataJSON } from '../functions/AsyncStorage'
import globalStyles from '../styles/global'
import axios from 'axios'

const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState('')
  const [studentId, setStudentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    axios
      .post('/signup', {
        handle,
        studentId,
        email,
        password,
        confirmPassword,
      })
      .then(res => {
        // storeDataJSON(email, currentUser)
        navigation.navigate('SignIn')
        // console.log(res.data)
      })
      .catch(err => {
        console.error(err.response)
      })
  }

  return (
    <View style={globalStyles.authViewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name='ios-person' size={24} color='black' />}
          placeholder='Name'
          onChangeText={currentInput => {
            setHandle(currentInput)
          }}
        />
        <Input
          leftIcon={<Ionicons name='ios-school' size={24} color='black' />}
          placeholder='Student ID'
          onChangeText={currentInput => {
            setStudentId(currentInput)
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
        <Input
          placeholder='Confirm Password'
          leftIcon={<Feather name='key' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={currentInput => {
            setConfirmPassword(currentInput)
          }}
        />
        <Button
          icon={<AntDesign name='user' size={24} color='white' />}
          title='  Sign Up!'
          onPress={handleSignUp}
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
