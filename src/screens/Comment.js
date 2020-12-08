import React, { useEffect, useContext, useState } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import dayjs from 'dayjs'
import CommentCard from '../components/CommentCard'
import { storeDataJSON, getData, getDataJSON } from '../functions/AsyncStorage'
import { AppContext } from '../context/store'
import { getOneBlog } from '../context/actions/dataActions'
const Comment = ({ navigation, route }) => {
  const [comment, setComment] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [reload, setReload] = useState(false)
  const [update, setUpdate] = useState(false)
  const { data, dataDispatch } = useContext(AppContext)
  const { comments } = data
  const { ui, uiDispatch } = useContext(AppContext)
  const { loading } = ui
  const { blogId, name, date, body, commentCount, likeCount } = route.params
  const handleComment = async () => {
    const handle = await getData('token')
    let posts = await getDataJSON('posts')
    let comments = await getDataJSON('comments')
    posts.forEach(post => {
      if (post.blogId == blogId) post.commentCount++
      storeDataJSON('posts', posts)
    })
    if (comments) {
      storeDataJSON('comments', [
        ...comments,
        {
          blogId,
          body: comment,
          createdAt: new Date().toISOString(),
          userHandle: handle,
        },
      ])
      alert('Comment added successfully!!')
    } else {
      storeDataJSON('comments', [
        {
          blogId,
          body: comment,
          createdAt: new Date().toISOString(),
          userHandle: handle,
        },
      ])
      alert('Comment added successfully!!')
    }
    setUpdate(!update)
  }
  const onRefresh = () => {
    reload ? setReload(false) : setReload(true)
  }

  useEffect(() => {
    getOneBlog(blogId, dataDispatch, uiDispatch)
  }, [reload, update])

  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
              {dayjs(date).format('[Posted on] DD MMM, YYYY')}
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
                setComment(currentInput)
              }}
            />
            <Button title='Comment' onPress={handleComment} />
          </Card>
        </ScrollView>
      </SafeAreaView>
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
