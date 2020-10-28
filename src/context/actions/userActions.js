import axios from 'axios'
import { removeData, storeData } from '../../functions/AsyncStorage'
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_USER,
} from '../types'

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

export const getAuthUser = (uiDispatch, userDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get('/user/me')
    .then(res => {
      userDispatch({ type: SET_USER, payload: res.data.credentials })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      console.error(err.response)
    })
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
