import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import globalStyles from '../styles/global'
import { signUp } from '../context/actions/userActions'
import { StoreContext } from '../context/store'

const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState('')
  const [studentId, setStudentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { ui, uiDispatch } = useContext(StoreContext)
  const { loading, disable, errors } = ui

  const handleSubmit = () => {
    signUp(
      handle,
      studentId,
      email,
      password,
      confirmPassword,
      navigation,
      uiDispatch
    )
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
          disabled={disable}
        />
        {errors ? (
          <Text style={globalStyles.errorTextStyle}>{errors.handle}</Text>
        ) : null}
        <Input
          leftIcon={<Ionicons name='ios-school' size={24} color='black' />}
          placeholder='Student ID'
          onChangeText={currentInput => {
            setStudentId(currentInput)
          }}
          disabled={disable}
        />
        {errors ? (
          <Text style={globalStyles.errorTextStyle}>{errors.studentId}</Text>
        ) : null}
        <Input
          leftIcon={<FontAwesome name='envelope' size={24} color='black' />}
          placeholder='E-mail Address'
          onChangeText={currentInput => {
            setEmail(currentInput)
          }}
          disabled={disable}
        />
        {errors ? (
          <Text style={globalStyles.errorTextStyle}>{errors.email}</Text>
        ) : null}
        <Input
          placeholder='Password'
          leftIcon={<Feather name='key' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={currentInput => {
            setPassword(currentInput)
          }}
          disabled={disable}
        />
        {errors ? (
          <Text style={globalStyles.errorTextStyle}>{errors.password}</Text>
        ) : null}
        <Input
          placeholder='Confirm Password'
          leftIcon={<Feather name='key' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={currentInput => {
            setConfirmPassword(currentInput)
          }}
          disabled={disable}
        />
        {errors ? (
          <Text style={globalStyles.errorTextStyle}>
            {errors.confirmPassword}
          </Text>
        ) : null}
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
