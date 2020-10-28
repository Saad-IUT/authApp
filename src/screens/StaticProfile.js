import React, { useEffect, useContext } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { StoreContext } from '../context/store'
import globalStyles from '../styles/global'
import { getUser } from '../context/actions/userActions'

const StaticProfileScreen = ({ navigation, route }) => {
  const { name } = route.params
  const { user, userDispatch } = useContext(StoreContext)
  const { userData } = user
  const { ui, uiDispatch } = useContext(StoreContext)
  const { loading } = ui

  useEffect(() => {
    getUser(uiDispatch, userDispatch, name)
  }, [])

  return (
    <View>
      <NavBar navigation={navigation} />
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
              About
            </Text>
            <Text style={globalStyles.textStyle}>Name : {userData.handle}</Text>
            <Text style={globalStyles.textStyle}>Born on : {userData.dob}</Text>
            <Text style={globalStyles.textStyle}>
              Address : {userData.location}
            </Text>
            <Text style={globalStyles.textStyle}>
              Works at : {userData.work}
            </Text>
          </>
        )}
      </Card>
    </View>
  )
}

export default StaticProfileScreen
