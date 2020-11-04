import React, { useEffect, useContext, useState } from 'react'
import {
  ActivityIndicator,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { AppContext } from '../context/store'
import globalStyles from '../styles/global'
import { getUser } from '../context/actions/userActions'
import dayjs from 'dayjs'

const StaticProfileScreen = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [reload, setReload] = useState(false)
  const onRefresh = () => {
    reload ? setReload(false) : setReload(true)
  }
  const { name } = route.params
  const { user, userDispatch } = useContext(AppContext)
  const { userData } = user
  const { ui, uiDispatch } = useContext(AppContext)
  const { loading } = ui
  useEffect(() => {
    getUser(uiDispatch, userDispatch, name)
  }, [reload])
  return (
    <View>
      <NavBar navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image
          source={{
            uri: userData.imageUrl,
          }}
          style={{ width: 300, height: 400, marginLeft: 45 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Card>
          {loading ? (
            <ActivityIndicator size='large' color='blue' animating={true} />
          ) : (
            <>
              <Text
                h4Style={{
                  padding: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
                h4
              >
                {userData.handle}
              </Text>
              <Text style={globalStyles.textStyle}>
                Born on : {dayjs(userData.dob).format('DD MMM, YYYY')}
              </Text>
              <Text style={globalStyles.textStyle}>
                Address : {userData.location}
              </Text>
              <Text style={globalStyles.textStyle}>
                Works at : {userData.work}
              </Text>
            </>
          )}
        </Card>
      </ScrollView>
    </View>
  )
}

export default StaticProfileScreen
