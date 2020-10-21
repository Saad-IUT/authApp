import React from 'react'
import { View } from 'react-native'
import { Card, Button, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import PostCard from '../components/PostCard'

const HomeScreen = ({ navigation }) => {
  const post =
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
      <PostCard name={'Saad'} date={'Posted on 10 Aug, 2020'} post={post} />
      <PostCard name={'Saad2'} date={'Posted on 12 Aug, 2020'} post={post} />
    </View>
  )
}

export default HomeScreen
