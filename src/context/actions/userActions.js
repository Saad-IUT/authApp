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
  SET_ERRORS,
  CLEAR_ERRORS,
  LIKE_SCREAM,
} from '../types'

export const signUp = (
  handle,
  studentId,
  email,
  password,
  confirmPassword,
  navigation,
  dispatch
) => {
  dispatch({ type: DISABLE_INPUT })
  // uiDispatch({ type: LOADING_UI })
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
      dispatch({ type: ENABLE_INPUT })
      // uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      dispatch({ type: ENABLE_INPUT })
      // uiDispatch({ type: STOP_LOADING_UI })
      dispatch({ type: SET_ERRORS, payload: err.response.data })
    })
  dispatch({ type: CLEAR_ERRORS })
}

export const signIn = (
  email,
  password,
  userDispatch,
  uiDispatch,
  dataDispatch
) => {
  uiDispatch({ type: DISABLE_INPUT })
  // uiDispatch({ type: LOADING_UI })
  axios
    .post('/login', {
      email,
      password,
    })
    .then(res => {
      setAuthorizationHeader(res.data.token)
      userDispatch({ type: SET_AUTHENTICATED })
      uiDispatch({ type: ENABLE_INPUT })
      getLikes(dataDispatch)
      // uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: ENABLE_INPUT })
      uiDispatch({ type: SET_ERRORS, payload: err.response.data })
    })
  uiDispatch({ type: CLEAR_ERRORS })
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

export const getLikes = dispatch => {
  axios
    .get('/user/me')
    .then(res => {
      dispatch({ type: LIKE_SCREAM, payload: res.data.likes })
    })
    .catch(err => {
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
