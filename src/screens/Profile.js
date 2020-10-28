import React, { useEffect, useContext } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { Card, Image, Text } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/providers/AuthProvider'
import globalStyles from '../styles/global'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { getAuthUser } from '../context/actions/userActions'
const ProfileScreen = ({ navigation }) => {
  const { user, userDispatch } = useContext(AuthContext)
  const { credentials } = user
  const { ui, uiDispatch } = useContext(AuthContext)
  const { loading } = ui

  useEffect(() => {
    getAuthUser(uiDispatch, userDispatch)
  }, [])

  return (
    <AuthContext.Consumer>
      {auth => (
        <View>
          <NavBar navigation={navigation} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Image
              source={{
                uri: credentials.imageUrl,
              }}
              style={{ width: 300, height: 400, marginLeft: 45 }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <TouchableOpacity
              onPress={() => {
                console.log('image')
              }}
            >
              <FontAwesome
                name='user-circle'
                size={28}
                color='pink'
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
                    About
                  </Text>
                  <TouchableOpacity onPress={() => console.log('edit it')}>
                    <AntDesign name='edit' size={28} color='pink' />
                  </TouchableOpacity>
                </View>
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
