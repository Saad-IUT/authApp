const { getDataJSON } = require('../functions/AsyncStorage')

const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(regEx)) return true
  else return false
}

const isInteger = studentId => {
  const regEx = /^\d+$/
  if (studentId.match(regEx)) return true
  else return false
}

const isEmpty = string => (string.trim() === '' ? true : false)

exports.validateSignupData = async data => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address'
  }
  if (isEmpty(data.password)) {
    errors.password = 'Must not be empty'
  } else if (data.password.length < 6) {
    errors.password = 'Must be minimum 6 characters'
  }
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must match'
  if (isEmpty(data.handle)) errors.handle = 'Must not be empty'
  if (isEmpty(data.studentId)) {
    errors.studentId = 'Must not be empty'
  } else if (!isInteger(data.studentId)) {
    errors.studentId = 'Must be an integer'
  }

  let users = await getDataJSON('users')
  if (users) {
    users.forEach(user => {
      if (user.handle == data.handle) {
        errors.handle = 'Already taken'
      } else if (user.email == data.email) {
        errors.email = 'Already taken'
      }
    })
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

exports.validateLoginData = data => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address'
  }
  if (isEmpty(data.password)) errors.password = 'Must not be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

exports.reduceUserDetails = data => {
  let userDetails = {}

  if (!isEmpty(data.dob.trim())) userDetails.dob = data.dob
  if (!isEmpty(data.work.trim())) userDetails.work = data.work
  if (!isEmpty(data.location.trim())) userDetails.location = data.location

  return userDetails
}
