import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Card, Button, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import PostCard from '../components/PostCard'
import axios from 'axios'
import { useNetInfo } from '@react-native-community/netinfo'

const HomeScreen = ({ navigation }) => {
  const netInfo = useNetInfo()
  if (netInfo.type != 'unknown' && !netInfo.isInternetReachable) {
    alert('No Internet!')
  }

  const [newPost, setNewPost] = useState('')
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)

  const postBlog = () => {
    axios
      .post('/blog', { body: newPost })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err.response)
      })
  }

  const getPost = async () => {
    setLoading(true)
    await axios
      .get('/blogs')
      .then(res => {
        setPost(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.response)
      })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <Card>
        <Input
          placeholder="What's On Your Mind?"
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
          onChangeText={currentInput => {
            setNewPost(currentInput)
          }}
        />
        <Button title='Post' type='outline' onPress={postBlog} />
      </Card>
      {loading ? (
        <Card>
          <ActivityIndicator size='large' color='blue' animating={true} />
        </Card>
      ) : (
        <FlatList
          data={post}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <PostCard
                blogId={item.blogId}
                name={item.userHandle}
                date={item.createdAt}
                body={item.body}
                userImage={item.userImage}
                commentCount={item.commentCount}
                likeCount={item.likeCount}
                navigation={navigation}
              />
            )
          }}
          keyExtractor={item => item.blogId}
        />
      )}
    </View>
  )
}

export default HomeScreen
