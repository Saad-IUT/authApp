import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Card, Button, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import PostCard from '../components/PostCard'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [post, setPost] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get('/blogs')
      .then(res => {
        setPost(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.response)
      })
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
      {!loading ? (
        <PostCard
          name={post[0].userHandle}
          date={post[0].createdAt}
          body={post[0].body}
          userImage={post[0].userImage}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

export default HomeScreen
