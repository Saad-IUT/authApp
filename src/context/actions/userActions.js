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
    .then(() => {
      navigation.navigate('SignIn')
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
      setAuthorizationHeader(res.data.token)
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
      return res.data
    })
    .catch(err => {
      console.error(err.response)
    })
}

export const getAuthUser = async () => {
  const token = await getData('token')
  axios
    .get('/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err.response)
    })
}

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`
  storeData('FBIdToken', FBIdToken)
  axios.defaults.headers.common['Authorization'] = FBIdToken
}
