import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker'
import { View } from 'react-native'
import { storeData } from '../functions/AsyncStorage'
const MyDatePicker = () => {
  const [date, setDate] = useState(new Date().toISOString())

  return (
    <View>
      <DatePicker
        style={{ width: 200 }}
        date={date}
        mode='date'
        placeholder='select date'
        format='YYYY-MM-DD'
        minDate='1900-01-01'
        maxDate={new Date().toISOString()}
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={date => {
          setDate(date)
          storeData('date', date)
        }}
      />
    </View>
  )
}
export default MyDatePicker
