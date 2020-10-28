import React, { useEffect, useContext } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import dayjs from 'dayjs'
import CommentCard from '../components/CommentCard'
import { handleComment } from '../context/actions/dataActions'
import { storeData } from '../functions/AsyncStorage'
import { AuthContext } from '../context/providers/AuthProvider'
import { getOneBlog } from '../context/actions/dataActions'
const Comment = ({ navigation, route }) => {
  const { blogId, name, date, body, commentCount, likeCount } = route.params
  const { comment, commentDispatch } = useContext(AuthContext)
  const { comments } = comment
  const { ui, uiDispatch } = useContext(AuthContext)
  const { loading } = ui

  useEffect(() => {
    getOneBlog(blogId, commentDispatch, uiDispatch)
  }, [blogId])

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
      </Card>
      <Card>
        <Input
          placeholder='Write Somethong!'
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
          onChangeText={currentInput => {
            storeData('comment', currentInput)
          }}
        />
        <Button title='Comment' onPress={() => handleComment(blogId)} />
      </Card>
      {loading ? (
        <Card>
          <ActivityIndicator size='large' color='blue' animating={true} />
        </Card>
      ) : (
        <FlatList
          data={comments}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CommentCard
                name={item.userHandle}
                date={item.createdAt}
                body={item.body}
              />
            )
          }}
          keyExtractor={item => item.createdAt}
        />
      )}
      {!loading && comments.length === 0 && (
        <Card>
          <Text style={{ textAlign: 'center' }}>
            Be the first to comment ☝
          </Text>
        </Card>
      )}
    </View>
  )
}

export default Comment
