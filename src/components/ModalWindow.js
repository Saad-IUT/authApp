import React, { useContext, useState } from 'react'
import { Card, Input, Text } from 'react-native-elements'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import {
  ActivityIndicator,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import DateSelect from './DateSelect'
import { getData } from '../functions/AsyncStorage'
import { detailsUpdate } from '../context/actions/dataActions'
import { StoreContext } from '../context/store'
import globalStyles from '../styles/global'

const ModalWindow = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [address, setAddress] = useState('')
  const [work, setWork] = useState('')
  const { ui, uiDispatch } = useContext(StoreContext)
  const { loading, disable } = ui
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>Please add your details:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                h4Style={{
                  fontSize: 20,
                  margin: 10,
                  fontWeight: 'normal',
                }}
                h4
              >
                Born on:
              </Text>
              <DateSelect />
            </View>
            <Input
              leftIcon={
                <FontAwesome name='address-book' size={24} color='black' />
              }
              placeholder='Address'
              onChangeText={currentInput => {
                setAddress(currentInput)
              }}
              disabled={disable}
            />
            <Input
              leftIcon={<FontAwesome name='building' size={24} color='black' />}
              placeholder='Works at'
              onChangeText={currentInput => {
                setWork(currentInput)
              }}
              disabled={disable}
            />
            {loading ? (
              <Card>
                <ActivityIndicator size='large' color='blue' animating={true} />
              </Card>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <TouchableHighlight
                  style={{ ...globalStyles.openButton, backgroundColor: 'red' }}
                  onPress={() => {
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={globalStyles.modalTextStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    ...globalStyles.openButton,
                    backgroundColor: '#2196F3',
                  }}
                  onPress={async () => {
                    const date = await getData('date')
                    detailsUpdate(date, work, address, uiDispatch)
                  }}
                >
                  <Text style={globalStyles.modalTextStyle}>Update</Text>
                </TouchableHighlight>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <AntDesign name='edit' size={28} color='#377dff' />
      </TouchableOpacity>
    </View>
  )
}

export default ModalWindow
