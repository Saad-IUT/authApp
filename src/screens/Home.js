import React, { useContext, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Card, Button, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import PostCard from '../components/PostCard'
import { useNetInfo } from '@react-native-community/netinfo'
import { handlePost } from '../context/actions/dataActions'
import { getPost } from '../context/actions/dataActions'
import { storeData } from '../functions/AsyncStorage'
import { StoreContext } from '../context/store'
const HomeScreen = ({ navigation }) => {
  const netInfo = useNetInfo()
  if (netInfo.type != 'unknown' && !netInfo.isInternetReachable) {
    alert('No Internet!')
  }

  const { ui, uiDispatch } = useContext(StoreContext)
  const { blog, blogDispatch } = useContext(StoreContext)

  const { loading } = ui
  const { blogs } = blog

  useEffect(() => {
    getPost(uiDispatch, blogDispatch)
  }, [])

  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <Card>
        <Input
          placeholder="What's On Your Mind?"
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
          onChangeText={currentInput => {
            storeData('post', currentInput)
          }}
        />
        <Button title='Post' type='outline' onPress={() => handlePost()} />
      </Card>
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
