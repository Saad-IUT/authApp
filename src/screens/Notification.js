import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Card, Avatar } from 'react-native-elements'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.viewStyle}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Post')
            }}
          >
            <Text style={{ paddingHorizontal: 10 }}>
              Pam Beesley Liked Your Post.
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  )
}

export default NotificationScreen
