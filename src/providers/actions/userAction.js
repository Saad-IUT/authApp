import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { removeData, storeData } from '../../functions/AsyncStorage'

export const signIn = (email, password, dispatch) => {
  axios
    .post('/login', {
      email,
      password,
    })
    .then(res => {
      // auth.setCurrentUser(userData)
      // console.log(res.data)
      storeData('auth', 'true')
      dispatch({ type: 'setAuth' })
    })
    .catch(err => {
      console.error(err.response)
    })
}

const isBrowser = () => typeof AsyncStorage !== 'undefined'
export const isAuth = async () =>
  isBrowser() && (await AsyncStorage.getItem('auth'))
    ? await AsyncStorage.getItem('auth')
    : false
