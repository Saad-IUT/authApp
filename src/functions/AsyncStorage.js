import { AsyncStorage } from 'react-native'

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
    console.log('Data Stored Successfully!')
  } catch (error) {
    console.log(error)
  }
}

const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log('Data Stored Successfully!')
  } catch (error) {
    console.log(error)
  }
}

const getData = async key => {
  try {
    let data = await AsyncStorage.getItem(key)
    if (data != null) {
      return data
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

const getDataJSON = async key => {
  try {
    let data = await AsyncStorage.getItem(key)
    if (data != null) {
      const jsonData = JSON.parse(data)
      return jsonData
    } else {
      console.log('No data with this key!')
    }
  } catch (error) {
    console.log(error)
  }
}

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key)
    console.log('Data Removed Successfully')
  } catch (error) {
    console.log(error)
  }
}

export { storeData, storeDataJSON, getData, getDataJSON, removeData }
