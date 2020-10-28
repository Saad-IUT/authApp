import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { StoreContext } from '../context/store'
import globalStyles from '../styles/global'
import axios from 'axios'

const StaticProfileScreen = ({ navigation, route }) => {
  const { name } = route.params
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)

  const getAuthUser = async () => {
    setLoading(true)
    axios
      .get(`/user/${name}`)
      .then(res => {
        setUser(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.response)
      })
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  return (
    <StoreContext.Consumer>
      {auth => (
        <View>
          <NavBar navigation={navigation} />
          <Image
            source={{
              uri: user.imageUrl,
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
                <Text style={globalStyles.textStyle}>Name : {user.handle}</Text>
                <Text style={globalStyles.textStyle}>Born on : {user.dob}</Text>
                <Text style={globalStyles.textStyle}>
                  Address : {user.location}
                </Text>
                <Text style={globalStyles.textStyle}>
                  Works at : {user.work}
                </Text>
              </>
            )}
          </Card>
        </View>
      )}
    </StoreContext.Consumer>
  )
}

export default StaticProfileScreen
