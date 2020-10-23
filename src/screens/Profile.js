import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Card, Avatar, Image } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/providers/AuthProvider'
import globalStyles from '../styles/global'

const ProfileScreen = ({ navigation }) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <View>
          <NavBar navigation={navigation} />
          <Image
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/831749020237.jpg?alt=media',
            }}
            style={{ width: 300, height: 400, marginLeft: 45 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Card>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar
                containerStyle={{ backgroundColor: 'cyan' }}
                rounded
                icon={{
                  name: 'thumbs-o-up',
                  type: 'font-awesome',
                  color: 'black',
                }}
                activeOpacity={1}
              />
              <Text style={{ paddingHorizontal: 10 }}>
                Pam Beesley Liked Your Post.
              </Text>
            </View>
          </Card>
          <Card>
            <Text style={globalStyles.textStyle}>{` 
                  About         
        Name : ${auth.currentUser.name}
        Born on : ${auth.currentUser.dob}
        Address : ${auth.currentUser.address}
        Works at : ${auth.currentUser.work}
          `}</Text>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default ProfileScreen
