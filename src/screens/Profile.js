import React from 'react'
import { View } from 'react-native'
import { Text, Card, Avatar } from 'react-native-elements'
import NavBar from '../components/NavBar'
import { AuthContext } from '../providers/AuthProvider'
import globalStyles from '../styles/global'

const ProfileScreen = ({ navigation }) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <View style={globalStyles.view}>
          <NavBar navigation={navigation} />
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
                {auth.currentUser.name} Liked Your Post.
              </Text>
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  )
}

export default ProfileScreen
