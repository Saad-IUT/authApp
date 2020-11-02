import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Card, Button, Text, Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import axios from 'axios'
import { StoreContext } from '../context/store'

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

  const handleLike = () => {
    axios
      .get(`/blog/${blogId}/like`)
      .then(res => {
        alert('Liked!!')
      })
      .catch(err => {
        alert(err.response.data.error)
      })
  }

  const handleUnlike = () => {
    axios
      .get(`/blog/${blogId}/unlike`)
      .then(res => {
        alert('Unliked!!')
      })
      .catch(err => {
        alert(err.response.data.error)
      })
  }

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
            onPress={handleLike}
          />
        ) : (
          <Button
            type='outline'
            title={`  Like (${likeCount})`}
            icon={<AntDesign name='like1' size={24} color='dodgerblue' />}
            onPress={handleUnlike}
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
