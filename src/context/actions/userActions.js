import axios from 'axios'
import { getDataJSON, removeData } from '../../functions/AsyncStorage'
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

export const getAuthUser = async (uiDispatch, userDispatch) => {
  uiDispatch({ type: LOADING_UI })
  let credentials = await getDataJSON('token')
  userDispatch({ type: SET_AUTH_USER, payload: credentials })
  uiDispatch({ type: STOP_LOADING_UI })
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
  removeData('token')
  alert('Signed out!')
}
