import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Card, Button, Text, Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { StoreContext } from '../context/store'
import {
  getLikes,
  handleLike,
  handleUnlike,
} from '../context/actions/dataActions'

const PostCard = ({
  navigation,
  blogId,
  name,
  date,
  body,
  commentCount,
  likeCount,
}) => {
  const { data, dataDispatch } = useContext(StoreContext)
  const { liked } = data

  let likedBlogs = []
  liked.forEach(like => {
    likedBlogs.push(like.blogId)
  })

  useEffect(() => {
    getLikes(dataDispatch)
  }, [])

  return (
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
            navigation.navigate('Static Profile', { name })
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {likedBlogs.indexOf(blogId) == -1 ? (
          <Button
            type='outline'
            title={`  Like (${likeCount})`}
            icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
            onPress={() => handleLike(blogId)}
          />
        ) : (
          <Button
            type='outline'
            title={`  Like (${likeCount})`}
            icon={<AntDesign name='like1' size={24} color='dodgerblue' />}
            onPress={() => handleUnlike(blogId)}
          />
        )}
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
  )
}

export default PostCard
