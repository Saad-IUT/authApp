import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'
import { StoreContext } from '../context/store'
import globalStyles from '../styles/global'
import { signIn } from '../context/actions/userActions'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, userDispatch } = useContext(StoreContext)
  const { ui, uiDispatch } = useContext(StoreContext)
  const { loading, disable, errors } = ui

  return (
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
          <Text style={globalStyles.errorTextStyle}>
            {errors.password}
            {errors.general}
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
              icon={<AntDesign name='login' size={24} color='white' />}
              title='  Sign In!'
              onPress={() => {
                signIn(email, password, userDispatch, uiDispatch)
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
          </>
        )}
      </Card>
    </View>
  )
}

export default SignInScreen
