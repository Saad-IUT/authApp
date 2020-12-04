import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import globalStyles from '../styles/global'
import { signUp } from '../context/actions/userActions'
import { AppContext } from '../context/store'
import { getDataJSON, storeDataJSON } from '../functions/AsyncStorage'

const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState('')
  const [studentId, setStudentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const { ui, uiDispatch } = useContext(AppContext)
  const { loading, disable } = ui
  const handleSubmit = async () => {
    let users = await getDataJSON('user')
    if (users) {
      storeDataJSON('user', [
        ...users,
        {
          handle,
          studentId,
          email,
          password,
          confirmPassword,
          // navigation,
          // uiDispatch,
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
          // navigation,
          // uiDispatch,
        },
      ])
    }

    // signUp(
    //   handle,
    //   studentId,
    //   email,
    //   password,
    //   confirmPassword,
    //   navigation,
    //   uiDispatch
    // )
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
        <Text style={globalStyles.errorTextStyle}>{errors.handle}</Text>
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
        <Text style={globalStyles.errorTextStyle}>{errors.studentId}</Text>
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
        <Text style={globalStyles.errorTextStyle}>{errors.email}</Text>

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
        <Text style={globalStyles.errorTextStyle}>{errors.password}</Text>

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
        <Text style={globalStyles.errorTextStyle}>
          {errors.confirmPassword}
        </Text>

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
