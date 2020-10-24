import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Card, Button, Text, Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../context/providers/AuthProvider'
import dayjs from 'dayjs'

const PostCard = ({
  navigation,
  blogId,
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
            <TouchableOpacity
              onPress={() => {
                // console.log(navigation)
                navigation.navigate('Static Profile')
              }}
            >
              <Text h4Style={{ padding: 10, fontWeight: 'bold' }} h4>
                {name}
              </Text>
            </TouchableOpacity>
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
                navigation.navigate('Comment', {
                  blogId,
                  name,
                  date,
                  body,
                  commentCount,
                  likeCount,
                })
              }}
            />
          </View>
        </Card>
      )}
    </AuthContext.Consumer>
  )
}

export default PostCard
