import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import globalStyles from '../styles/global'
import { AppContext } from '../context/store'
import { getDataJSON, storeDataJSON } from '../functions/AsyncStorage'
import { validateSignupData } from '../utils/validators'

const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState('')
  const [studentId, setStudentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const { ui, uiDispatch } = useContext(AppContext)
  const { loading, disable } = ui

  const handleSubmit = async () => {
    let data = validateSignupData({
      handle,
      studentId,
      email,
      password,
      confirmPassword,
    })

    let { valid, errors } = data
    setErrors(errors)
    console.log(errors)
    let users = await getDataJSON('user')
    if (valid) {
      if (users) {
        storeDataJSON('user', [
          ...users,
          {
            handle,
            studentId,
            email,
            password,
            confirmPassword,
          },
        ])
      } else {
        storeDataJSON('user', [
          {
            handle,
            studentId,
            email,
            password,
            confirmPassword,
          },
        ])
      }
    }
  }

  return (
    <View style={globalStyles.authViewStyle}>
      <Card>
        <Card.Title>Welcome to Blog-47</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name='ios-person' size={24} color='black' />}
          placeholder='Name'
          onChangeText={currentInput => {
            setHandle(currentInput)
            setErrors({ ...errors, handle: '' })
            if (currentInput === '')
              setErrors({ ...errors, handle: 'Must not be empty' })
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
            setErrors({ ...errors, studentId: '' })
            if (currentInput === '')
              setErrors({ ...errors, studentId: 'Must not be empty' })
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
            setErrors({ ...errors, email: '' })
            if (currentInput === '')
              setErrors({ ...errors, email: 'Must not be empty' })
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
            setErrors({ ...errors, password: '' })
            if (currentInput === '')
              setErrors({ ...errors, password: 'Must not be empty' })
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
            setErrors({ ...errors, confirmPassword: '' })
            if (currentInput === '')
              setErrors({ ...errors, confirmPassword: 'Must not be empty' })
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
