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
  console.log(newPost)
  const addBlog = () => {
    axios
      .post(
        '/blog',
        { body: newPost },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxMGM4ZjhiMGRjN2Y1NWUyYjM1NDFmMjllNWFjMzc0M2Y3N2NjZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmxvZ2FwcDQ3IiwiYXVkIjoiYmxvZ2FwcDQ3IiwiYXV0aF90aW1lIjoxNjAzNTU1NjY3LCJ1c2VyX2lkIjoiRGxRTWgxM3hzWWdOR3dvSlFwcXd6MjBJSVRBMyIsInN1YiI6IkRsUU1oMTN4c1lnTkd3b0pRcHF3ejIwSUlUQTMiLCJpYXQiOjE2MDM1NTU2NjcsImV4cCI6MTYwMzU1OTI2NywiZW1haWwiOiJzYWFkQGl1dC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2FhZEBpdXQuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.E9W2bBSFu6Dkvo5qlqhHbeoltwSMTacXdOt1gKTq4t0GZudDXhU_3aKPDgUxhCNo89rFANNbzKz2bVp90BlA6F0w1OUgzEf0E5EjqgbQDLJIcEt_Rj307S8qEayV4lGwWo24vMofOcFtWsL8qtJtr6VNaFpiR1LksbpGJ2q5A8ekvsgsqbQ4xFIQiCh7HK5JNqcdc9450Lpx-HA80KSAWULLrEZv7UoNvlOX2ZNFX922wMPjgBOVFjFQThxamzdWOzVcpzhgbOZSNfZTQIQfy86xssReANSlbZfe1r3Vjaw5sPuLB1kt6Xu35klI7hw1_xUqyRu96UfYFJDS5lQJjw',
          },
        }
      )
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
        <Button title='Post' type='outline' onPress={addBlog} />
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
