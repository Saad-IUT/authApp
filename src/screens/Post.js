import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'

const PostScreen = ({ navigation }) => {
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <Card>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            containerStyle={{ backgroundColor: '#ffab91' }}
            rounded
            icon={{ name: 'user', type: 'font-awesome', color: 'black' }}
            activeOpacity={1}
          />
          <Text h4Style={{ padding: 10 }} h4>
            Jim Halpert
          </Text>
        </View>
        <Text style={{ fontStyle: 'italic' }}> Posted on 10 Aug, 2020</Text>
        <Text
          style={{
            paddingVertical: 10,
          }}
        >
          {post}
        </Text>
        <Card.Divider />
        <Text> 21 Likes, 7 Comments</Text>
      </Card>
      <Card>
        <Input
          placeholder='Write Somethong!'
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
        />
        <Button title='Comment' onPress={() => {}} />
      </Card>
    </View>
  )
}

export default PostScreen
