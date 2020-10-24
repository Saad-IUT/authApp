import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import globalStyles from '../styles/global'
import { signUp } from '../context/actions/userActions'

const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState('')
  const [studentId, setStudentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = () => {
    setDisabled(true)
    signUp(handle, studentId, email, password, confirmPassword, navigation)
    setLoading(true)
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
          disabled={disabled}
        />
        <Input
          leftIcon={<Ionicons name='ios-school' size={24} color='black' />}
          placeholder='Student ID'
          onChangeText={currentInput => {
            setStudentId(currentInput)
          }}
          disabled={disabled}
        />
        <Input
          leftIcon={<FontAwesome name='envelope' size={24} color='black' />}
          placeholder='E-mail Address'
          onChangeText={currentInput => {
            setEmail(currentInput)
          }}
          disabled={disabled}
        />
        <Input
          placeholder='Password'
          leftIcon={<Feather name='key' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={currentInput => {
            setPassword(currentInput)
          }}
          disabled={disabled}
        />
        <Input
          placeholder='Confirm Password'
          leftIcon={<Feather name='key' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={currentInput => {
            setConfirmPassword(currentInput)
          }}
          disabled={disabled}
        />
        {loading ? (
          <Button
            icon={
              <ActivityIndicator size='large' color='white' animating={true} />
            }
            title='  Loading...'
          />
        ) : (
          <>
            <Button
              icon={<AntDesign name='user' size={24} color='white' />}
              title='  Sign Up!'
              onPress={handleSubmit}
            />
            <Button
              type='clear'
              icon={<AntDesign name='login' size={24} color='dodgerblue' />}
              title='  Already have an account?'
              onPress={() => {
                navigation.navigate('SignIn')
              }}
            />
          </>
        )}
      </Card>
    </View>
  )
}

export default SignUpScreen
