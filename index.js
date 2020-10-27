import React from 'react'
import { AuthProvider } from './src/context/providers/AuthProvider'
import App from './App'
import AsyncStorage from '@react-native-community/async-storage'
// Clear all keys
// AsyncStorage.clear()
// Check all keys of asyncstorage
// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log('AsyncStorage')
//       console.log({ [store[i][0]]: store[i][1] })
//       return true
//     })
//   })
// })

function index() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default index
