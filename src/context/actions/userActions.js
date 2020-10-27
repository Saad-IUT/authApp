import axios from 'axios'
import { getData, removeData, storeData } from '../../functions/AsyncStorage'
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types'

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

export const signIn = (email, password, dispatch) => {
  axios
    .post('/login', {
      email,
      password,
    })
    .then(res => {
      setAuthorizationHeader(res.data.token)
      dispatch({ type: SET_AUTHENTICATED })
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

export const logoutUser = async dispatch => {
  await removeData('FBIdToken')
  delete axios.defaults.headers.common['Authorization']
  dispatch({ type: SET_UNAUTHENTICATED })
}

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`
  storeData('FBIdToken', FBIdToken)
  axios.defaults.headers.common['Authorization'] = FBIdToken
}
