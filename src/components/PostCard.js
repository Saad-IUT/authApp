import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text, Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../providers/AuthProvider'
import dayjs from 'dayjs'

const PostCard = ({
  navigation,
  name,
  date,
  body,
  commentCount,
  likeCount,
}) => {
  return (
    <AuthContext.Consumer>
      {auth => (
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
            <Text h4Style={{ padding: 10, fontWeight: 'bold' }} h4>
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
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Button
              type='outline'
              title={`  Like (${likeCount})`}
              icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
            />
            <Button
              title={`Comment (${commentCount})`}
              onPress={() => {
                navigation.navigate('Post')
              }}
            />
          </View>
        </Card>
      )}
    </AuthContext.Consumer>
  )
}

export default PostCard
