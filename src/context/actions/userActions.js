import axios from 'axios'
import { removeData, storeData } from '../../functions/AsyncStorage'
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_AUTH_USER,
  SET_USER,
} from '../types'

export const signUp = (
  handle,
  studentId,
  email,
  password,
  confirmPassword,
  navigation,
  uiDispatch
) => {
  uiDispatch({ type: LOADING_UI })
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
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const signIn = (email, password, authDispatch, uiDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .post('/login', {
      email,
      password,
    })
    .then(res => {
      setAuthorizationHeader(res.data.token)
      authDispatch({ type: SET_AUTHENTICATED })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const getAuthUser = (uiDispatch, authUserDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get('/user/me')
    .then(res => {
      authUserDispatch({ type: SET_AUTH_USER, payload: res.data.credentials })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const getUser = (uiDispatch, userDispatch, name) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get(`/user/${name}`)
    .then(res => {
      userDispatch({ type: SET_USER, payload: res.data })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
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
