import axios from 'axios'

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
    .then(res => {
      navigation.navigate('SignIn')
      console.log(res.data)
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
    .then(res => {
      // storeDataJSON(email, currentUser)
      console.log(res.data)
      auth.setIsLoggedIn(true)
    })
    .catch(err => {
      console.error(err.response)
    })
}
