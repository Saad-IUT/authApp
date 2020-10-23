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
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const getPost = async () => {
    setLoading(true)
    await axios // blog actions
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
  const body =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <Card>
        <Input
          placeholder="What's On Your Mind?"
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
        />
        <Button title='Post' type='outline' onPress={() => {}} />
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
        />
      )}
    </View>
  )
}

export default HomeScreen
