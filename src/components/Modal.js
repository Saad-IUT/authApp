import React, { useState } from 'react'
import { Input, Text } from 'react-native-elements'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import {
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import DateSelect from './DateSelect'

const ModalWindow = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [address, setAddress] = useState('')
  const [work, setWork] = useState('')
  const [disable, setDisable] = useState(false)
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please add your details:</Text>

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

            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: 'red' }}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  console.log(address, work)
                }}
              >
                <Text style={styles.textStyle}>Update</Text>
              </TouchableHighlight>
            </View>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 6,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default ModalWindow
