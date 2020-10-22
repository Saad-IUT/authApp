import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text, Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../providers/AuthProvider'

const PostCard = ({ navigation, name, date, body }) => {
  return (
    <AuthContext.Consumer>
      {auth => (
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
          <Text style={{ fontStyle: 'italic' }}> {date}</Text>
          <Text
            style={{
              paddingVertical: 10,
            }}
          >
            {body}
          </Text>
          <Card.Divider />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Button
              type='outline'
              title='  Like (21)'
              icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
            />
            <Button
              title='Comment (7)'
              onPress={() => {
                navigation.navigate('Post')
              }}
            />
          </View>
        </Card>
      )}
    </AuthContext.Consumer>
  )
}

export default PostCard
