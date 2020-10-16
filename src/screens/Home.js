import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { AntDesign, Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'

const HomeScreen = ({ navigation }) => {
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
    <View style={globalStyles.view}>
      <NavBar navigation={navigation} />
      <Card>
        <Input
          placeholder="What's On Your Mind?"
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
        />
        <Button title='Post' type='outline' onPress={() => {}} />
      </Card>
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
            Jim Halpert
          </Text>
        </View>
        <Text style={{ fontStyle: 'italic' }}> Posted on 10 Aug, 2020</Text>
        <Text
          style={{
            paddingVertical: 10,
          }}
        >
          {post}
        </Text>
        <Card.Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            type='outline'
            title='  Like (21)'
            icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
          />
          <Button type='solid' title='Comment (7)' />
        </View>
      </Card>
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
            Dwight Schrute
          </Text>
        </View>
        <Text style={{ fontStyle: 'italic' }}> Posted on 10 Aug, 2020</Text>
        <Text
          style={{
            paddingVertical: 10,
          }}
        >
          {post}
        </Text>
        <Card.Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            type='outline'
            title='  Like (17)'
            icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
          />
          <Button type='solid' title='Comment (10)' />
        </View>
      </Card>
    </View>
  )
}

export default HomeScreen
