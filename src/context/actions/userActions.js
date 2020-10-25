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

export const handlePost = async () => {
  const post = await getData('post')
  axios
    .post('/blog', { body: post })
    .then(res => {
      console.log(res.data)
      alert('Posted successfully!!')
    })
    .catch(err => {
      console.error(err.response)
    })
  removeData('post')
}

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`
  storeData('FBIdToken', FBIdToken)
  axios.defaults.headers.common['Authorization'] = FBIdToken
}
