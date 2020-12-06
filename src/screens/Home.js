import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from 'react-native'
import { Card, Button, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import PostCard from '../components/PostCard'
import { useNetInfo } from '@react-native-community/netinfo'
// import { handlePost } from '../context/actions/dataActions'
import { getPost } from '../context/actions/dataActions'
import { getData, getDataJSON, storeDataJSON } from '../functions/AsyncStorage'
import { AppContext } from '../context/store'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [post, setPost] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [reload, setReload] = useState(false)
  const handlePost = async () => {
    const handle = await getData('token')
    let posts = await getDataJSON('posts')
    if (posts) {
      storeDataJSON('posts', [
        ...posts,
        {
          body: post,
          commentCount: 0,
          createdAt: Date.now(),
          likeCount: 0,
          userHandle: handle,
        },
      ])
    } else {
      storeDataJSON('posts', [
        {
          body: post,
          commentCount: 0,
          createdAt: Date.now(),
          likeCount: 0,
          userHandle: handle,
        },
      ])
    }
  }
  const onRefresh = () => {
    reload ? setReload(false) : setReload(true)
  }
  const netInfo = useNetInfo()
  if (netInfo.type != 'unknown' && !netInfo.isInternetReachable) {
    alert('No Internet!')
  }

  const setToken = async () => {
    const FBIdToken = await getData('FBIdToken')
    axios.defaults.headers.common['Authorization'] = FBIdToken
  }

  const { ui, uiDispatch } = useContext(AppContext)
  const { data, dataDispatch } = useContext(AppContext)
  const { loading } = ui
  const { blogs } = data
  useEffect(() => {
    setToken()
    getPost(uiDispatch, dataDispatch)
  }, [reload])

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
            <Input
              placeholder="What's On Your Mind?"
              leftIcon={<Entypo name='pencil' size={24} color='black' />}
              onChangeText={currentInput => {
                setPost(currentInput)
              }}
            />
            <Button title='Post' type='outline' onPress={handlePost} />
          </Card>
        </ScrollView>
      </SafeAreaView>
      {loading ? (
        <Card>
          <ActivityIndicator size='large' color='blue' animating={true} />
        </Card>
      ) : (
        <FlatList
          data={blogs}
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
