import axios from 'axios'
import { getData, storeData } from '../../functions/AsyncStorage'

export const signUp = (
  handle,
  studentId,
  email,
  password,
  confirmPassword,
  navigation
) => {
  axios
    .post('/signup', {
      handle,
      studentId,
      email,
      password,
      confirmPassword,
    })
    .then(res => {
      navigation.navigate('SignIn')
      // console.log(res.data)
    })
    .catch(err => {
      console.error(err.response)
    })
}

export const signIn = (email, password, auth) => {
  axios
    .post('/login', {
      email,
      password,
    })
    .then(async res => {
      storeData('token', res.data.token)
      // console.log(res.data)
      auth.setIsLoggedIn(true)
    })
    .catch(err => {
      console.error(err.response)
    })
}

export const getUser = user => {
  axios
    .get(`/user/${user}`)
    .then(res => {
      // console.log(res.data.token)
      return res.data
    })
    .catch(err => {
      console.error(err.response)
    })
}

export const getAuthUser = async () => {
  const token = await getData('token')
  // console.log('authuser' + token)
  axios
    .get('/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      console.log('userActions' + res.data)
      return res.data
    })
    .catch(err => {
      console.error(err.response)
    })
}
