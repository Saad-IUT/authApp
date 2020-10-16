import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card, Avatar } from 'react-native-elements'
import NavBar from '../components/NavBar'

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
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

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'blue',
  },
  viewStyle: {
    flex: 1,
  },
})

export default NotificationScreen
