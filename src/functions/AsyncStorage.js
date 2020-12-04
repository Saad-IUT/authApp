import LocalStorage from '@react-native-community/async-storage'

const storeData = async (key, value) => {
  try {
    await LocalStorage.setItem(key, value)
    // alert('Data Stored Successfully!')
  } catch (error) {
    alert(error)
  }
}

const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await LocalStorage.setItem(key, jsonValue)
    alert('Data Stored Successfully!')
  } catch (error) {
    alert(error)
  }
}

const getData = async key => {
  try {
    let data = await LocalStorage.getItem(key)
    if (data != null) {
      return data
    } else {
      // alert('No data with this key!')
    }
  } catch (error) {
    alert(error)
  }
}

const getDataJSON = async key => {
  try {
    let data = await LocalStorage.getItem(key)
    if (data != null) {
      const jsonData = JSON.parse(data)
      return jsonData
    } else {
      alert('No data with this key!')
    }
  } catch (error) {
    alert(error)
  }
}

const removeData = async key => {
  try {
    await LocalStorage.removeItem(key)
    // alert('Data Removed Successfully')
  } catch (error) {
    alert(error)
  }
}

export { storeData, storeDataJSON, getData, getDataJSON, removeData }
