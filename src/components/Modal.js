import React, { useState } from 'react'
import { Input, Button, Card } from 'react-native-elements'
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons'

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'

const ModalWindow = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.')
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please add your details:</Text>
            <Input
              leftIcon={
                <FontAwesome name='birthday-cake' size={20} color='black' />
              }
              placeholder='Born On'
              onChangeText={currentInput => {
                // setHandle(currentInput)
              }}
              // disabled={disable}
            />
            <Input
              leftIcon={
                <FontAwesome name='address-book' size={24} color='black' />
              }
              placeholder='Address'
              onChangeText={currentInput => {
                // setHandle(currentInput)
              }}
              // disabled={disable}
            />
            <Input
              leftIcon={<FontAwesome name='building' size={24} color='black' />}
              placeholder='Works at'
              onChangeText={currentInput => {
                // setHandle(currentInput)
              }}
              // disabled={disable}
            />
            
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
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
                  console.log('update')
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
    // alignItems: 'center',
    // marginTop: 22,
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
