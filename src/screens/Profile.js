import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/providers/AuthProvider'
import globalStyles from '../styles/global'
import axios from 'axios'

const ProfileScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState([])
  const [loading, setLoading] = useState(false)

  const getAuthUser = async () => {
    setLoading(true)
    axios
      .get('/user/me')
      .then(res => {
        setCredentials(res.data.credentials)
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
    <AuthContext.Consumer>
      {auth => (
        <View>
          <NavBar navigation={navigation} />
          <Image
            source={{
              uri: credentials.imageUrl,
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
                <Text style={globalStyles.textStyle}>
                  Name : {credentials.handle}
                </Text>
                <Text style={globalStyles.textStyle}>
                  Born on : {credentials.dob}
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
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default ProfileScreen
