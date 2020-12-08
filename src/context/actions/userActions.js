import { getDataJSON, removeData } from '../../functions/AsyncStorage'
import {
  SET_UNAUTHENTICATED,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_AUTH_USER,
} from '../types'

export const getAuthUser = async (uiDispatch, userDispatch) => {
  uiDispatch({ type: LOADING_UI })
  let credentials = await getDataJSON('token')
  userDispatch({ type: SET_AUTH_USER, payload: credentials })
  uiDispatch({ type: STOP_LOADING_UI })
}

export const logoutUser = async dispatch => {
  dispatch({ type: SET_UNAUTHENTICATED })
  removeData('token')
  alert('Signed out!')
}
