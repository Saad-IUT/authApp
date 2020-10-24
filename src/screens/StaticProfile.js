import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Card, Avatar, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { getUser } from '../context/actions/userActions'
import { AuthContext } from '../context/providers/AuthProvider'
import globalStyles from '../styles/global'

const StaticProfileScreen = ({ navigation }) => {
  // const getUser = async () => {
  //   setLoading(true)
  //   await axios // blog actions
  //     .get(`/user/${currentUser}`)
  //     .then(res => {
  //       setPost(res.data)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       console.error(err.response)
  //     })
  // }
  // useEffect(() => {
  //   getUser()
  // }, [])
  return (
    <AuthContext.Consumer>
      {auth => (
        <View>
          <NavBar navigation={navigation} />
          <Text>Static Profile</Text>
          {/* <Image
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/831749020237.jpg?alt=media',
            }}
            style={{ width: 300, height: 400, marginLeft: 45 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Card>
            <Text
              h4Style={{ padding: 10, fontWeight: 'bold', textAlign: 'center' }}
              h4
            >
              About
            </Text>
            <Text style={globalStyles.textStyle}>Name :</Text>
            <Text style={globalStyles.textStyle}>Born on :</Text>
            <Text style={globalStyles.textStyle}>Address :</Text>
            <Text style={globalStyles.textStyle}>Works at :</Text>
          </Card> */}
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default StaticProfileScreen
