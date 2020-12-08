import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'
import { AppContext } from '../context/store'
import globalStyles from '../styles/global'
import { validateLoginData } from '../utils/validators'
import { getDataJSON, storeDataJSON } from '../functions/AsyncStorage'
import { SET_AUTHENTICATED } from '../context/types'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const { user, userDispatch } = useContext(AppContext)
  const { ui, uiDispatch } = useContext(AppContext)
  const { data, dataDispatch } = useContext(AppContext)
  const { loading, disable } = ui
  const handleSubmit = async () => {
    let data = validateLoginData({
      email,
      password,
    })

    let { valid, errors } = data
    setErrors(errors)
    let users = await getDataJSON('users')
    if (valid) {
      if (users) {
        users.forEach(user => {
          if (user.email == email && user.password == password) {
            userDispatch({ type: SET_AUTHENTICATED })
            const { handle, dob, work, location, imageUrl } = user
            storeDataJSON('token', { handle, dob, work, location, imageUrl })
          } else {
            setErrors({ general: 'Wrong credentials, please try again!' })
          }
        })
      } else {
        setErrors({ general: 'No user found, please sign up!' })
      }
    }
  }
  return (
    <View style={globalStyles.authViewStyle}>
      <Card>
        <Card.Title>Welcome to Blog-47</Card.Title>
        <Card.Divider />
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
            setErrors({ ...errors, password: '', general: '' })
            if (currentInput === '')
              setErrors({ ...errors, password: 'Must not be empty' })
          }}
          disabled={disable}
        />
        <Text style={globalStyles.errorTextStyle}>
          {errors.password}
          {errors.general}
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
              icon={<AntDesign name='login' size={24} color='white' />}
              title='  Sign In!'
              onPress={handleSubmit}
            />
            <Button
              type='clear'
              icon={<AntDesign name='user' size={24} color='dodgerblue' />}
              title="  Don't have an account?"
              onPress={() => {
                setErrors('')
                navigation.navigate('SignUp')
              }}
            />
          </>
        )}
      </Card>
    </View>
  )
}

export default SignInScreen
