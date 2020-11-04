import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  authViewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4bacb8',
  },
  textStyle: {
    fontSize: 20,
    color: 'darkblue',
    paddingVertical: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: -8,
  },
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
  modalTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
