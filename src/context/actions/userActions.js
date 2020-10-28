import axios from 'axios'
import { removeData, storeData } from '../../functions/AsyncStorage'
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_AUTH_USER,
  SET_USER,
  DISABLE_INPUT,
  ENABLE_INPUT,
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
  uiDispatch({ type: DISABLE_INPUT })
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
      uiDispatch({ type: ENABLE_INPUT })
      navigation.navigate('SignIn')
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: ENABLE_INPUT })
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const signIn = (email, password, userDispatch, uiDispatch) => {
  uiDispatch({ type: DISABLE_INPUT })
  uiDispatch({ type: LOADING_UI })
  axios
    .post('/login', {
      email,
      password,
    })
    .then(res => {
      uiDispatch({ type: ENABLE_INPUT })
      setAuthorizationHeader(res.data.token)
      userDispatch({ type: SET_AUTHENTICATED })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: ENABLE_INPUT })
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const getAuthUser = (uiDispatch, userDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get('/user/me')
    .then(res => {
      userDispatch({ type: SET_AUTH_USER, payload: res.data.credentials })
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
