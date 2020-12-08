import React, { useEffect, useContext, useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import ModalWindow from '../components/ModalWindow'
import { AppContext } from '../context/store'
import globalStyles from '../styles/global'
import { FontAwesome } from '@expo/vector-icons'
import { getAuthUser } from '../context/actions/userActions'
import dayjs from 'dayjs'

const ProfileScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [reload, setReload] = useState(false)
  const onRefresh = () => {
    reload ? setReload(false) : setReload(true)
  }
  const { user, userDispatch } = useContext(AppContext)
  const { credentials } = user
  const { ui, uiDispatch } = useContext(AppContext)
  const { loading } = ui
  useEffect(() => {
    getAuthUser(uiDispatch, userDispatch)
  }, [reload])
  return (
    <View>
      <NavBar navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <Image
            source={require('../../assets/my-image.jpg')}
            style={{ width: 300, height: 400, marginLeft: 45 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('image upload')
            }}
          >
            <FontAwesome
              name='user-circle'
              size={28}
              color='#377dff'
              style={{ marginLeft: -15, marginBottom: -10 }}
            />
          </TouchableOpacity>
        </View>
        <Card>
          {loading ? (
            <ActivityIndicator size='large' color='blue' animating={true} />
          ) : (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  h4Style={{
                    padding: 10,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                  h4
                >
                  {credentials.handle}
                </Text>
                <ModalWindow />
              </View>
              <Pressable
                onLongPress={() => {
                  console.log('Are you sure?')
                }}
              >
                <Text
                  style={{
                    backgroundColor: 'red',
                    textAlign: 'center',
                    padding: 10,
                  }}
                >
                  Delete Profile
                </Text>
              </Pressable>
              <Text style={globalStyles.textStyle}>
                Born on : {dayjs(credentials.dob).format('DD MMM, YYYY')}
              </Text>
              <Text style={globalStyles.textStyle}>
                Address : {credentials.location}
              </Text>
              <Text style={globalStyles.textStyle}>
                Works at : {credentials.work}
              </Text>
            </>
          )}
        </Card>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen
