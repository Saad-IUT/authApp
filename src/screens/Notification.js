import React from 'react'
import { View } from 'react-native'
import { Text, Card, Avatar } from 'react-native-elements'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'

const NotificationScreen = ({ navigation }) => {
  return (
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
            Pam Beesley Liked Your Post.
          </Text>
        </View>
      </Card>
    </View>
  )
}

export default NotificationScreen
