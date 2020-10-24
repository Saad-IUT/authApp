import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import dayjs from 'dayjs'
import CommentCard from '../components/CommentCard'

const PostScreen = ({ navigation, route }) => {
  const { blogId, name, date, body, commentCount, likeCount } = route.params

  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      {/* <Card>
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
            {name}
          </Text>
        </View>
        <Text style={{ fontStyle: 'italic' }}>
          {dayjs(date).format('[Posted on] DD MMM,YYYY')}
        </Text>
        <Text
          style={{
            paddingVertical: 10,
          }}
        >
          {body}
        </Text>
        <Card.Divider />
        <Text>{` ${likeCount} Likes, ${commentCount} Comments`}</Text>
      </Card> */}
    </View>
  )
}

export default PostScreen
